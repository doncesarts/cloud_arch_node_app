'use strict';

const express = require('express');
var visitCounter = 0;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  visitCounter++;
  res.send('Application Hase Been Visited ' + visitCounter + ' Times');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
