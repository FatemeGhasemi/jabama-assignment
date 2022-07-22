FROM node:16.14.2-alpine3.15

WORKDIR /usr/src/app

COPY tsconfig.json .
COPY tsoa.json .
COPY package*.json ./
RUN npm ci

COPY src ./src

RUN npm i -g pm2
RUN npm run build
RUN npm run swagger
RUN cp -rv public ./dist

