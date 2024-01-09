use crate::controller::utils;
use serde::{Deserialize, Serialize};
use worker::*;
const HTML_CONTENT: &str = include_str!("./index.html");
#[derive(Debug, Deserialize, Serialize)]
pub struct LoginRequest {
    pub username: String,
    pub password: String,
}
pub async fn index(_: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    Response::from_html(HTML_CONTENT)
}

pub async fn login(mut req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let data = req.json::<LoginRequest>().await;
    match data {
        Ok(data) => {
            let db = _ctx.d1("DB");
            match db {
                Ok(db) => Response::ok("db 连接成公"),
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

pub async fn testdb(req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
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
