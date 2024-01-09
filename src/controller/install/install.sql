DROP TABLE IF EXISTS sys_user;
CREATE TABLE IF NOT EXISTS sys_user (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    enable INTEGER DEFAULT 1,
    token VARCHAR(255)
);
CREATE INDEX idx_sys_user_username ON sys_user (username);
INSERT INTO sys_user (username, email, password, enable, token) VALUES('xhuan', 'admin@a.com', '7f0145c8c9cd49ae5acbdcf1177f940f', 1, '');