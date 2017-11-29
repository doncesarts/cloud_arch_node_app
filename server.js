'use strict';

const express = require('express');
var os = require("os");
var visitCounter = 0;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

//Couter route
app.get('/counter', (req, res) => {
  visitCounter++;
  res.send('Application Hase Been Visited ' + visitCounter + ' Times');
});

//Hostname echo router
app.get('/hostname', (req, res) => {
  visitCounter++;
  res.send('Hello Fron ' + os.hostname());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
