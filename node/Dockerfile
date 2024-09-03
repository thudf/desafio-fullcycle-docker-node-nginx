FROM node:22.7.0-bullseye

ENV DOCKERIZE_VERSION v0.8.0

RUN apt-get update && apt-get install -y wget

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

EXPOSE 3000