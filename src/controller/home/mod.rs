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
                                        if db_result.enable != 1 {
                                            return Response::from_json(&utils::Response::<i32> {
                                                status: 501,
                                                message: String::from(
                                                    "您的账号已被封禁请联系管理员!",
                                                ),
                                                data: None,
                                            });
                                        }

                                        let post_password = md5::compute(data.password);
                                        post_password = format!("{:x}", post_password);

                                        if db_result.password.eq(post_password.as_str()) {
                                            let uuid = Uuid::new_v4();

                                            return Response::from_json(
                                                &utils::Response::<String> {
                                                    status: 200,
                                                    message: String::from("登录成功！"),
                                                    data: uuid,
                                                },
                                            );
                                        }
                                    }
                                    Response::from_json(&utils::Response::<i32> {
                                        status: 500,
                                        message: String::from("db error"),
                                        data: None,
                                    })
                                }
                                Err(_) => Response::from_json(&utils::Response::<i32> {
                                    status: 500,
                                    message: String::from("db error"),
                                    data: None,
                                }),
                            }
                        }
                        Err(_) => Response::from_json(&utils::Response::<i32> {
                            status: 500,
                            message: String::from("db error"),
                            data: None,
                        }),
                    }
                }
                Err(_) => Response::from_json(&utils::Response::<i32> {
                    status: 500,
                    message: String::from("db error"),
                    data: None,
                }),
            }
        }
        Err(_) => Response::ok("err"),
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
