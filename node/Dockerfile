FROM node:22.7.0-bullseye

WORKDIR /usr/src/app

COPY . .

ENV DOCKERIZE_VERSION v0.8.0

RUN npm init -y && npm install express mysql
RUN apt-get update && apt-get install -y wget
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000