require('dotenv').config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require('aylien_textapi');

const mockAPIResponse = require('./mockAPI.js');

// set aylien API credentias
const aylienapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
