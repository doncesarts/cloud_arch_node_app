## Cloud Arch Assignment App

This repository contains a cloud foundry node js aplication.

## Build Localy

Runing the cloud foundry app locally for dev.

```
npm install - Install Dependancies
npm run - Run Application
```


## Push To Clound Foundry Environment

We created a manifest.yml with the app configurations. 

```
applications:
 - name:   samplenodejs
   host:   samplenodejs-ca674
   memory: 128M
   command:  node server.js
``` 

Update the host property to be unique and push the application to a cloud foundry environment : 

```
bx cf push
```



---
[Link to the app running bluemix](https://samplenodejs-ca674.eu-de.mybluemix.net/hostname)
