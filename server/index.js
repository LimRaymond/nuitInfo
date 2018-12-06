const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mongo = require('mongodb')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test', {
});

var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
server.listen(8080);