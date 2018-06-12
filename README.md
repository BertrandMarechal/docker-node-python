# docker-node-python

We want to achieve a communication from one docker container to another, passing a file as parameter, and receiving a cropped version of it as output.

The structure of our solution is as follow :
- One docker image based on node js (typescript as code), to first process the file
- One docker image based on python, doing some processing.