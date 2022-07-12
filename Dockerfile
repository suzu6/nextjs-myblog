FROM node:16-buster-slim

WORKDIR /workspace
COPY ./package*.json ./
RUN apt-get update && \
    apt-get install -y git && \
    npm install
EXPOSE 3000
