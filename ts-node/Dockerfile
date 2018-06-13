FROM node:8.9-8.9-alpine

VOLUME /usr/src/app/data

WORKDIR /usr/src/app

RUN npm install

CMD ["/bin/bash"]

EXPOSE 8080

COPY . /usr/src/app

ENTRYPOINT ts-node main.ts
