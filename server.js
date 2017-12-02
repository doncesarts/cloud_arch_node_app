"use strict";

const express = require("express");
const cfenv = require("cfenv");
var os = require("os");
var visitCounter = 0;

// get environmental information for this App
const appEnv = cfenv.getAppEnv();
const instance = appEnv.app.instance_index || 0;

// Constants
const PORT = appEnv.port;
const HOST = appEnv.bind;

// App
const app = express();

//Couter route
app.get("/counter", (req, res) => {
  visitCounter++;
  res.send("Application Hase Been Visited " + visitCounter + " Times");
});

//Hostname echo router
app.get("/hostname", (req, res) => {
  visitCounter++;
  res.send("Hello From " + os.hostname());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
