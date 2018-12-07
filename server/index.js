const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mongo = require('mongodb')
const mongoose = require('mongoose')
var cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, function(err) {
    if (err) throw err;
    console.log("Connected");
});

app.use(core());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
server.listen(8081);
