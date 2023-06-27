FROM node:lts-alpine

RUN npm install -g serve

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

RUN yarn add html5-qrcode

COPY . /app

RUN yarn build

CMD ["yarn", "start"]  
