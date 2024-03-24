FROM node:20.11.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY ./src ./src
COPY ./public ./public
RUN npm run build
RUN npm install -g serve

CMD serve -s build