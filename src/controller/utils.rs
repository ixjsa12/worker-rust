use serde::{Deserialize, Serialize};
#[derive(Debug, Deserialize, Serialize)]
pub struct Response<T> {
    pub data: Option<T>,
    pub status: u32,
    pub message: String,
}
