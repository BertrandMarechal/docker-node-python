FROM jjanzic/docker-python3-opencv

VOLUME /usr/src/app/data

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN pip install imutils

WORKDIR /usr/src/app

EXPOSE 8080

CMD ["python", "server.py"]