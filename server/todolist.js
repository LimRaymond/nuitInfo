var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
});

var Task = module.exports = mongoose.model('Todolist', {
    userId: String,
    title: String,
    task: String,
    versionKey: false
});

