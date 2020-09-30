FROM node:14-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache git openssh

WORKDIR /app
