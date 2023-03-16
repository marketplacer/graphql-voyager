FROM node:18-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache git openssh

WORKDIR /app
