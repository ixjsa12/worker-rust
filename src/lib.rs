// use rhai::Engine;
use serde::{Deserialize, Serialize};
use worker::*;
mod controller;
mod model;
use controller::home;
use controller::install;
use controller::pdf;
use controller::rhai;
#[derive(Debug, Deserialize, Serialize)]
struct GenericResponse {
    status: u16,
    message: String,
}

#[event(fetch)]
async fn main(req: Request, env: Env, _ctx: Context) -> Result<Response> {
    let rsp = Router::new()
        .get_async("/pdf", pdf::index)
        .get_async("/", home::index)
        .post_async("/", home::login)
        .post_async("/test", rhai::test)
        .get_async("/install", install::install)
        .run(req, env)
        .await;

    if let Ok(mut rsp) = rsp {
        let content_type = rsp.headers().get("Content-Type");
        if let Ok(content_type) = content_type {
            if let Some(content_type) = content_type {
                let _ = rsp.headers_mut().set(
                    "Content-Type",
                    format!("{};charset=utf-8", content_type).as_str(),
                );
            } else {
                let _ = rsp
                    .headers_mut()
                    .set("Content-Type", format!("charset=utf-8").as_str());
            }
        } else {
            let _ = rsp
                .headers_mut()
                .set("Content-Type", format!("charset=utf-8").as_str());
        }
        Ok(rsp)
    } else {
        Response::error("Server Error", 500)
    }
}
