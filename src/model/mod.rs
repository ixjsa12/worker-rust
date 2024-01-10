use serde::{Deserialize, Serialize};
//用户对象
#[derive(Debug, Deserialize, Serialize)]
pub struct UseModel {
    pub user_id: u32,
    pub username: String,
    pub email: String,
    pub password: String,
    pub enable: u32,
    pub token: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct RhaiData {
    pub rhai_id: Option<u32>,
    pub user_id: Option<u32>,
    pub method: Option<String>,
    pub script: Option<String>,
    pub uuid: Option<String>,
}
