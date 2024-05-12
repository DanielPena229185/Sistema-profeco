FROM node:20

WORKDIR /report_app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 50052

CMD [ "npm","run","start" ]

