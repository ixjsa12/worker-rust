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
pub struct DavModel {
    pub dav_id: u32,
    pub server: String,
    pub username: String,
    pub password: String,
    pub path: String,
}
