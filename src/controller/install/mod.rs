pub async fn install(req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    req.
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
