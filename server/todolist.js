var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
});

var Task = module.exports = mongoose.model('Todolist', {
    task: [String],
    versionKey: false
});

