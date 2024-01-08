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
        Ok(data) => Response::ok(form),
        Err => {}
    }
    Response::ok("ff")
}
