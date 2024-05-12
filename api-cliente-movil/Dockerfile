FROM node:18

WORKDIR /usr/src/app

ENV API_CLIENTE_MOVIL_ENV PROD

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/main.js" ]
