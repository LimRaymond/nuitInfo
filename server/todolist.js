var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27017', {
    useMongoClient: true
});

var Widget = module.exports = mongoose.model('Todolist', {
    task: String,
    versionKey: false
});

