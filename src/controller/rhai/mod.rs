use crate::controller::utils;
use crate::model;
use rhai::Dynamic;
use rhai::Engine;
use serde::{Deserialize, Serialize};
use serde_json;
use uuid::Uuid;
use worker::*;
pub async fn test(mut req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let data = req.json::<model::RhaiData>().await;
    match data {
        Ok(data) => {
            let engine = Engine::new();

            // engine.
            let result = engine.eval::<Dynamic>(&data.script.unwrap().as_str());
            match result {
                Ok(result) => {
                    console_debug!("{}", format!("{:?}", result));
                    Response::from_json(&utils::Response::<String> {
                        status: 200,
                        message: String::from("ok!"),
                        data: Some(format!("{:?}", result)),
                    })
                }
                Err(e) => Response::from_json(&utils::Response::<i32> {
                    status: 500,
                    message: String::from(e.to_string()),
                    data: None,
                }),
            }
        }
        Err(_) => Response::from_json(&utils::Response::<i32> {
            status: 500,
            message: String::from("提交数据错误!"),
            data: None,
        }),
    }
}

pub async fn save(mut req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let data = req.json::<model::RhaiData>().await;
    match data {
        Ok(data) => {
            let db = _ctx.d1("DB");
            match db {
                Ok(db) => {
                    let uuid = Uuid::new_v4();
                    // let rs = db.prepare(
                    //     ,
                    // );
                    let id: u32 = 1;

                    // let save = rs.bind(&[
                    //     JsValue::from(id),
                    //     "GET".into(),
                    //     &data.script.into(),
                    //     uuid.to_string().into(),
                    // ]);
                    let save = worker::query!(
                        &db,
                        "INSERT INTO sys_rhai (user_id, method, script, uuid) VALUES(?,?,?,?)",
                        &id,
                        "GET",
                        &data.script.unwrap().as_str(),
                        uuid.to_string()
                    );
                    match save {
                        Ok(save) => {
                            let result = save.run().await;
                            match result {
                                Ok(result) => Response::from_json(&utils::Response::<String> {
                                    status: 200,
                                    message: String::from("创建成功!"),
                                    data: Some(uuid.to_string()),
                                }),
                                Err(e) => Response::from_json(&utils::Response::<i32> {
                                    status: 500,
                                    message: String::from(e.to_string()),
                                    data: None,
                                }),
                            }
                        }
                        Err(_) => Response::from_json(&utils::Response::<i32> {
                            status: 500,
                            message: String::from("db 连接失败"),
                            data: None,
                        }),
                    }
                }
                Err(e) => Response::from_json(&utils::Response::<i32> {
                    status: 500,
                    message: String::from(e.to_string()),
                    data: None,
                }),
            }
        }
        Err(_) => Response::from_json(&utils::Response::<i32> {
            status: 500,
            message: String::from("参数解析异常"),
            data: None,
        }),
    }
}

pub async fn run(mut req: Request, ctx: RouteContext<()>) -> worker::Result<Response> {
    if let Some(id) = ctx.param("id") {
        let db = ctx.d1("DB");
        match db {
            Ok(db) => {
                let query = worker::query!(&db, "select * from sys_rhai where uuid=?", &id);
                match query {
                    Ok(query) => {
                        let rhai_data = query.first::<model::RhaiData>(None).await;
                        match rhai_data {
                            Ok(rhai_data) => {
                                let x = 123;
                                match rhai_data {
                                    Ok(rhai_data_2) => {
                                        let engine = Engine::new();
                                        let result = engine
                                            .eval::<Dynamic>(&rhai_data_2.script.unwrap().as_str());
                                        match result {
                                            Ok(result2) => {
                                                return Response::from_json(&utils::Response::<
                                                    String,
                                                > {
                                                    status: 200,
                                                    message: String::from("ok!"),
                                                    data: Some(format!("{:?}", result2)),
                                                });
                                            }
                                            Err(_p) => {
                                                return Response::error("Bad Request", 400);
                                            }
                                        }
                                    }
                                    Err(_w) => {
                                        return Response::error("Bad Request", 400);
                                    }
                                };
                            }
                            Err(_q) => {
                                return Response::error("Bad Request", 400);
                            }
                        }
                    }
                    Err(_x) => {
                        return Response::error("Bad Request", 400);
                    }
                }
            }
            Err(post_async) => {
                return Response::error("Bad Request", 400);
            }
        }
    }

    Response::error("Bad Request", 400)
}
