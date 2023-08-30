FROM node

WORKDIR /usr/RevCamApp

COPY package.json /usr/RevCamApp

RUN npm install 

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
