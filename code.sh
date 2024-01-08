#!/bin/bash

# 定义code-server版本号和URL
CODE_SERVER_VERSION="4.16.1"
CODE_SERVER_URL="https://github.com/coder/code-server/releases/download/v${CODE_SERVER_VERSION}/code-server-${CODE_SERVER_VERSION}-linux-amd64.tar.gz"

# 检查/tmp/code-server目录是否存在
if [ ! -d "/tmp/code-server-${CODE_SERVER_VERSION}-linux-amd64" ]; then
    echo "下载并解压code-server发布包..."
    # 下载code-server发布包
    wget ${CODE_SERVER_URL} -P /tmp/

    # 解压发布包
    tar -xzf /tmp/code-server-${CODE_SERVER_VERSION}-linux-amd64.tar.gz -C /tmp/

    echo "code-server发布包已下载并解压完成。"
fi
mkdir -p /tmp/code-server/extensions
mkdir -p /tmp/code-server/data
echo "启动code-server服务..."
# 运行code-server服务
/tmp/code-server-${CODE_SERVER_VERSION}-linux-amd64/bin/code-server --user-data-dir=/tmp/code-server/data  --extensions-dir=/tmp/code-server/extensions --port=9096  
