FROM node:8.9-8.9-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

CMD ["/bin/bash"]

EXPOSE 8080

ENTRYPOINT ts-node main.ts
