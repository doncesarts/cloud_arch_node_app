## Cloud Arch Assignment App

This repository contains dockerized node js aplication.

## Build Localy

Runing the conatiner localy using detached mode can ba achieved using the following command. (Useful for dev)

```
docker run -p 49160:8090 -d <your username>/node-web-app
```


## Push To Docker Repo

Bellow are instruction to create and push docker iamge to docker hub.

Go to the directory of the application where Dockerfile is located and run the following command to build a docker image with tag.

```
docker build -t <your username>/<name> .
```

Login to your docker hub.
```
docker login
```

Push Docker iamge to docker hub.

```
docker push <your username>/<name>
```
---
[Link to docker our docker hub repo](https://hub.docker.com/r/danielrejniak/ca674_cloud_arch_test_app/)
