FROM node:10.4-slim

LABEL vendor="Codate" mantainer="Charles Viegas <charles.viegas@codate.com.br>"

RUN apt-get update && apt-get install -y \
    git \
    make \
    gcc \
    python

WORKDIR /app

COPY package*.json ./

RUN npm install \
    && apt-get remove -y git \
    && ln -s ../src node_modules/src

COPY . .

CMD [ "npm", "start" ]
