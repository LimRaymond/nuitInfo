const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mongo = require('mongodb')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test', {
    useMongoClient: true
});

var db = mongoose.connection;

//app.use(express.static(__dirname + '/../client'));

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server.listen(8080);