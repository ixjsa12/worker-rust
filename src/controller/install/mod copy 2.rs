use crate::controller::utils;
use worker::*;
const INSTALL_SQL: &str = include_str!("./install.sql");
pub async fn install(req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let db = _ctx.d1("DB");
    match db {
        Ok(db) => {
            // let _ = db.exec("BEGIN TRANSACTION;");
            let sqls: Vec<String> = INSTALL_SQL.split(';').map(|s| s.to_string()).collect();
            // for item in sqls {
            //     if item.len() == 0 {
            //         continue;
            //     }
                // console_debug!("{}", format!("输出:  {};", item.replace("\r\n", " ")));
                let rs = db
                    .exec(format!("{};", INSTALL_SQL.replace("\r\n", " ").replace(";", "\n")).as_str())
                    .await;
                match rs {
                    Ok(_) => {
                       return Response::from_json(&utils::Response::<i32> {
                            status: 200,
                            message: String::from("初始化成功!"),
                            data: None,
                        })
                    },
                    Err(e) => {
                        // let _ = db.exec("ROLLBACK;");
                        return Response::from_json(&utils::Response::<i32> {
                            status: 500,
                            message: String::from(e.to_string()),
                            data: None,
                        });
                    }
                }
            // }
            // let _ = db.exec("COMMIT;");
           
        }
        Err(_) => Response::from_json(&utils::Response::<i32> {
            status: 500,
            message: String::from("db error"),
            data: None,
        }),
    }
}
