pub fn gen_pdf(_: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    Response::from_html("pdf")
}