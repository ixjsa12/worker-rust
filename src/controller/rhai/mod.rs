use crate::controller::utils;
use crate::model;
use rhai::{Dynamic, Engine, EvalAltResult, Map};
use std::result::Result as StdResult;
use uuid::Uuid;
use worker::*;
#[derive(Debug, Clone, Eq, PartialEq, Hash)]
pub struct Test {
    pub name: String,
    pub age: u32,
}
// Function that may fail - the error type must be 'Box<EvalAltResult>'
fn safe_divide(x: i64, y: i64) -> StdResult<i64, Box<EvalAltResult>> {
    if y == 0 {
        // Return an error if y is zero
        Err("Division by zero!".into()) // shortcut to create Box<EvalAltResult::ErrorRuntime>
    } else {
        Ok(x / y)
    }
}

async fn request(url: &str, option: Map) -> StdResult<String, Box<EvalAltResult>> {
    let method = Method::Get;

    let method_str = option.get("method");
    let req = Request::new(url, method);
    match req {
        Ok(req) => {
            let data = Fetch::Request(req).send().await;
            match data {
                Ok(mut data) => {
                    let txt = data.text().await;
                    match txt {
                        Ok(text) => Ok(text),
                        Err(d) => Err("请求构建错误！".into()),
                    }
                }
                Err(_x) => Err("请求构建错误！".into()),
            }
        }
        Err(_f) => Err("请求构建错误！".into()),
    }
}

fn blockReq(url: &str, option: Map) {
    let (tx, rx) = futures_channel::oneshot::channel();
    // Spawns a future that'll make our fetch request and not block this function.
    wasm_bindgen_futures::spawn_local({
        async move {
            let fetch = Fetch::Url("https://cloudflare.com".parse().unwrap());
            let res = fetch.send_with_signal(&signal).await;
            tx.send(res).unwrap();
        }
    });
}
// expand_enum! { http_method_enum:  worker::Method=>Head,Get,Post,Put,Patch,Delete,Options,Connect,Trace}

pub async fn test(mut req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let data = req.json::<model::RhaiData>().await;
    console_debug!("脚本测试哦");

    match data {
        Ok(data) => {
            let mut engine = Engine::new();
            engine.register_fn("request", blockReq);
            // engine.register_fn("divide", safe_divide);
            // engine.
            let result = engine.eval::<Dynamic>(&data.script.unwrap().as_str());
            match result {
                Ok(result) => Response::from_json(&utils::Response::<String> {
                    status: 200,
                    message: String::from("ok!"),
                    data: Some(format!("{:?}", result)),
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

pub async fn run(req: Request, ctx: RouteContext<()>) -> worker::Result<Response> {
    let id = ctx.param("id");
    match id {
        Some(id) => {
            let db = ctx.d1("DB");
            match db {
                Ok(db) => {
                    let query = worker::query!(&db, "select * from sys_rhai where uuid=? ", &id);
                    match query {
                        Ok(query) => {
                            let rhai_result = query.first::<model::RhaiData>(None).await;
                            match rhai_result {
                                Ok(rhai_result) => {
                                    if rhai_result.is_some() {
                                        let script = rhai_result.unwrap().script.unwrap();
                                        let engine = Engine::new();

                                        // engine.register_fn(name, func)
                                        // engine.
                                        let result = engine.eval::<Dynamic>(script.as_str());

                                        match result {
                                            Ok(result) => {
                                                return Response::from_json(&utils::Response::<
                                                    String,
                                                > {
                                                    status: 200,
                                                    message: String::from("ok!"),
                                                    data: Some(format!("{:?}", result)),
                                                });
                                            }
                                            Err(_x) => Response::error("Bad Request", 400),
                                        }
                                    } else {
                                        Response::error("Bad Request", 400)
                                    }
                                }
                                Err(_f) => Response::error("Bad Request", 400),
                            }
                        }
                        Err(_l) => Response::error("Bad Request", 400),
                    }
                }
                Err(_x) => Response::error("Bad Request", 400),
            }
        }
        None => Response::error("Bad Request", 400),
    }
}
