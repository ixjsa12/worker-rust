// use rhai::Engine;
use crate::controller::dav;
use crate::controller::discord;
use crate::controller::home;
use crate::controller::install;
use serde::{Deserialize, Serialize};
use worker::*;
mod controller;
mod model;
#[derive(Debug, Deserialize, Serialize)]
struct GenericResponse {
    status: u16,
    message: String,
}

#[event(fetch)]
async fn main(req: Request, env: Env, _ctx: Context) -> Result<Response> {
    let rsp = Router::new()
        .get_async("/", home::index)
        .post_async("/discord/interaction", discord::interaction_api)
        .post_async("/", home::login)
        .get_async("/install", install::install)
        .post_async("/dav/create", dav::add)
        .get_async("/derive/*path", dav::webdav)
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
