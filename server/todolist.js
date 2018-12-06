var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useMongoClient: true
});

var Widget = module.exports = mongoose.model('Todolist', {
    task: String,
    versionKey: false
});

