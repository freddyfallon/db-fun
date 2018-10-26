FROM node:8-alpine

WORKDIR /app

ADD . /app

RUN yarn install

CMD yarn start-dev