use crate::controller::utils;
use rhai::Dynamic;
use rhai::Engine;
use serde::{Deserialize, Serialize};
use worker::*;
#[derive(Debug, Deserialize, Serialize)]
pub struct RhaiData {
    pub script: String,
}
pub async fn test(mut req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let data = req.json::<RhaiData>().await;
    match data {
        Ok(data) => {
            let engine = Engine::new();
            // engine.
            // let result = engine.eval::<Dynamic>(&data.script.as_str());
            // match result {
            //     // serde_json::to_string(&value)
            //     Ok(result) => Response::from_json(&utils::Response::<Dynamic> {
            //         status: 200,
            //         message: String::from("ok!"),
            //         data: &result,
            //     }),
            //     Err(_) => Response::from_json(&utils::Response::<i32> {
            //         status: 500,
            //         message: String::from("提交数据错误!"),
            //         data: None,
            //     }),
            // }
        }
        Err(_) => Response::from_json(&utils::Response::<i32> {
            status: 500,
            message: String::from("提交数据错误!"),
            data: None,
        }),
    }
}
