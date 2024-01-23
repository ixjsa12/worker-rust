pub mod commands;
pub mod interaction;
use worker::*;
//APPLICATION ID 1198832769288130601
//PUBLIC KEY 4d42097d76b3f4dd12c899a07b5afaa71fd2fa01fe824012fac484b2a96d4d22
//机器人认证
pub async fn interaction_api(mut req: Request, ctx: RouteContext<()>) -> worker::Result<Response> {
    let data = req.json::<interaction::Interaction>().await;
    match data {
        Ok(data) => {
            worker::console_log!("成功 {:?}", data.unwrap());
            let mut app = interaction::DiscordApp::new(req, ctx);
            // app.push_command()
            app.handel()
        }
        Err(_e) => Response::ok("ff"),
    }
}
