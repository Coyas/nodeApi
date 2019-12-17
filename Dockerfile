FROM node

WORKDIR /

COPY . /

RUN npm install

EXPOSE 80

CMD [ "node", "index.js" ]