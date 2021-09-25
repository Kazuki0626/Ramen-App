FROM node:14.15.0-slim

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apt-get update
RUN yarn global add @vue/cli @vue/cli-init create-nuxt-app firebase-tools

WORKDIR /app

RUN yarn install

ENV HOST 0.0.0.0
EXPOSE 3000