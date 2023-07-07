FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

RUN yarn add html5-qrcode

COPY . /app

RUN yarn build

CMD ["yarn", "start"]  
