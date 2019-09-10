FROM node:8.9-alpine

VOLUME /usr/src/app/data

WORKDIR /usr/src/app

EXPOSE 8080

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g ts-node typescript

RUN npm install

ENTRYPOINT ts-node main.ts

CMD ["/bin/bash"]
# CMD ["ts-node" ,"main.ts"]