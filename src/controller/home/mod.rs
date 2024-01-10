use std::fmt::format;

use crate::controller::utils;
use crate::model;
use md5;
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use worker::*;
// md5::compute(b"abcdefghijklmnopqrstuvwxyz");
const HTML_CONTENT: &str = include_str!("./index.html");
#[derive(Debug, Deserialize, Serialize)]
pub struct LoginRequest {
    pub username: String,
    pub password: String,
}
pub async fn index(_: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let data = md5::compute(b"xhuan123.");
    let data = format!("{:x}", data);
    Response::ok(data)
    // Response::from_html(HTML_CONTENT)
}

pub async fn login(mut req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let data = req.json::<LoginRequest>().await;
    match data {
        Ok(data) => {
            console_debug!("登录信息{:?}", data);
            let db = _ctx.d1("DB");
            match db {
                Ok(db) => {
                    let query = worker::query!(
                        &db,
                        "select * from sys_user where username=?",
                        &data.username
                    );
                    match query {
                        Ok(result) => {
                            let db_result = result.first::<model::UseModel>(None).await;
                            match db_result {
                                Ok(db_result) => {
                                    if let Some(db_result) = db_result {
                                        console_debug!("用户信息{:?}", db_result);
                                        if db_result.enable == 1 {
                                            console_debug!("账号正常！");
                                            let post_password =
                                                md5::compute(data.password.as_bytes());
                                            let md5_pwd = format!("{:x}", post_password);
                                            if db_result.password.eq(md5_pwd.as_str()) {
                                                console_debug!("密码校验通过！");
                                                let uuid = Uuid::new_v4();

                                                let update_statement = db.prepare(
                                                    "update sys_user set token=? where user_id=CAST(? AS INTEGER)",
                                                );

                                                let query = update_statement.bind(&[
                                                    uuid.to_string().into(),
                                                    db_result.user_id.to_string().into(),
                                                ]);

                                                if query.is_ok() {
                                                    console_debug!("返回登录成功！");
                                                    return Response::from_json(
                                                        &utils::Response::<String> {
                                                            status: 200,
                                                            message: String::from("登录成功"),
                                                            data: Some(uuid.to_string()),
                                                        },
                                                    );
                                                } else {
                                                    console_debug!("返回失败！{:?}", query.err());
                                                }
                                            }
                                        }
                                    }
                                    Response::from_json(&utils::Response::<i32> {
                                        status: 500,
                                        message: String::from("账号或密码错误!"),
                                        data: None,
                                    })
                                }
                                Err(e) => Response::from_json(&utils::Response::<i32> {
                                    status: 500,
                                    message: String::from(format!(
                                        "数据库查询失败！:{}",
                                        e.to_string()
                                    )),
                                    data: None,
                                }),
                            }
                        }
                        Err(_) => Response::from_json(&utils::Response::<i32> {
                            status: 500,
                            message: String::from("查询构建错误！"),
                            data: None,
                        }),
                    }
                }
                Err(_) => Response::from_json(&utils::Response::<i32> {
                    status: 500,
                    message: String::from("数据库连接异常！"),
                    data: None,
                }),
            }
        }
        Err(_) => Response::from_json(&utils::Response::<i32> {
            status: 500,
            message: String::from("请求数据错误！"),
            data: None,
        }),
    }
}

pub async fn testdb(_req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let db = _ctx.d1("DB");
    match db {
        Ok(_db) => Response::ok("db 连接成公"),
        Err(_) => Response::from_json(&utils::Response::<i32> {
            status: 500,
            message: String::from("db error"),
            data: None,
        }),
    }
}
