use crate::controller::utils;
use crate::model;
use base64::{decode, encode};
use serde::{Deserialize, Serialize};
use std::fmt::format;
use worker::*;
#[derive(Debug, Deserialize, Serialize)]
pub struct AddWebDavRequest {
    pub path: String,
    pub server: String,
    pub username: String,
    pub password: String,
}
pub async fn add(mut req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let data = req.json::<AddWebDavRequest>().await;
    match data {
        Ok(data) => {
            let db = _ctx.d1("DB");
            match db {
                Ok(db) => {
                    let query = worker::query!(
                        &db,
                        "insert into sys_webdav(path,server,username,password) values(?,?,?,?)",
                        data.path,
                        data.server,
                        data.username,
                        data.password
                    );
                    match query {
                        Ok(query) => {
                            let result = query.run().await;
                            match result {
                                Ok(result) => Response::from_json(&utils::Response::<i32> {
                                    status: 500,
                                    message: String::from("保存成功"),
                                    data: None,
                                }),
                                Err(_e) => Response::from_json(&utils::Response::<i32> {
                                    status: 500,
                                    message: String::from(format!(
                                        "数据库插入失败原因{}",
                                        _e.to_string()
                                    )),
                                    data: None,
                                }),
                            }
                        }
                        Err(_e) => Response::from_json(&utils::Response::<i32> {
                            status: 500,
                            message: String::from(format!("数据库连接失败原因{}", _e.to_string())),
                            data: None,
                        }),
                    }
                }
                Err(_e) => Response::from_json(&utils::Response::<i32> {
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

pub async fn webdav(mut req: Request, ctx: RouteContext<()>) -> worker::Result<Response> {
    let path = ctx.param("path");
    match path {
        Some(path) => {
            let db = ctx.d1("DB");
            match db {
                Ok(db) => {
                    let query =
                        worker::query!(&db, "select * from sys_webdav where path = ? ", path);
                    match query {
                        Ok(query) => {
                            let data = query.first::<model::DavModel>(None).await;
                            match data {
                                Ok(data) => match data {
                                    Some(data) => {
                                        let mut head = Headers::new();
                                        let auth=encode();
                                        head.append("Authorization", formate!("Basic "));
                                        let mut requestInit = RequestInit::new();
                                        requestInit.with_method(Method::Get);
                                        requestInit.with_headers(head);
                                        let request =
                                            Request::new_with_init(&data.server, &requestInit);

                                        Response::from_json(&utils::Response::<model::DavModel> {
                                            status: 200,
                                            message: String::from("查询成功"),
                                            data: Some(data),
                                        })
                                    }
                                    None => Response::from_json(&utils::Response::<i32> {
                                        status: 500,
                                        message: String::from("查询结果为空"),
                                        data: None,
                                    }),
                                },
                                Err(_e) => {
                                    return Response::from_json(&utils::Response::<i32> {
                                        status: 500,
                                        message: String::from(format!(
                                            "查询结果异常{}",
                                            _e.to_string()
                                        )),
                                        data: None,
                                    })
                                }
                            }
                        }
                        Err(_e) => Response::from_json(&utils::Response::<i32> {
                            status: 500,
                            message: String::from("查询语句构建异常"),
                            data: None,
                        }),
                    }
                }
                Err(_e) => Response::from_json(&utils::Response::<i32> {
                    status: 500,
                    message: String::from("数据库连接异常！"),
                    data: None,
                }),
            }
        }
        None => Response::from_json(&utils::Response::<i32> {
            status: 500,
            message: String::from("路径错误！"),
            data: None,
        }),
    }
}
