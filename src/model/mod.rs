use serde::{Deserialize, Serialize};
//用户对象
#[derive(Debug, Deserialize, Serialize)]
pub struct UseModel {
    pub user_id: i64,
    pub username: String,
    pub email: String,
    pub password: String,
    pub enable: u32,
    pub token: String,
}
