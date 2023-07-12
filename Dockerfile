FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app

RUN yarn

RUN yarn build

CMD ["yarn", "start"]  
