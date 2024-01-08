FROM rust:1.73-bullseye

# install cargo binstall to reduce image size
WORKDIR /usr/local/cargo/bin
RUN curl -L --output cargo-binstall.tgz https://github.com/cargo-bins/cargo-binstall/releases/download/v0.22.0/cargo-binstall-x86_64-unknown-linux-gnu.tgz && \
    tar -xvzf cargo-binstall.tgz && \
    chmod +x cargo-binstall && \
    rm cargo-binstall.tgz

RUN rustup component add rust-analyzer rustfmt rust-src clippy && \
    cargo binstall -y cargo-watch

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

RUN apt-get install -y nodejs
RUN npm i -g wrangler@3.1.1
RUN apt update -y && apt install -y libc++-dev libc++abi-dev
RUN curl -fsSL https://code-server.dev/install.sh | sh
WORKDIR /root
