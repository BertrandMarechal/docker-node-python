FROM jjanzic/docker-python3-opencv

VOLUME /usr/src/app/data

WORKDIR /usr/src/app

RUN pip install imutils

WORKDIR /usr/src/app

EXPOSE 8081

COPY . /usr/src/app

CMD ["python", "server.py"]