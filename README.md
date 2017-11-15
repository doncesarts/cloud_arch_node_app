## Cloud Arch Assignment App

This repository contains dockerized node js aplication.

## Build Localy

Runing the conatiner localy for dev.

```
npm install - Install Dependancies
npm run - Run Application
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
