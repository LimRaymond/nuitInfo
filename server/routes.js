const express = require("express");
const router = express.Router();
var TaskSchema = require('./todolist');
var task;

router.get("/", function(res, req){

});

router.get("/todoList", function(req, res){

});

router.get("/addTask", function(req, res){
    res.redirect("/todoList");
});

router.post("/addTask", function(req, res){
    var Task = new TaskSchema({
        task: task
    });
    Task.save(function(err){
        if (err) throw err;
    });
    res.status(200).send({message: "SUCCESS"});
});

router.get("/removeTask", function(req, res){
    res.redirect("todoList");
});

router.post("/removeTask", function(req, res){
    let idTask = req.body.idTask;
    TaskSchema.remove({ _id: idTask}, function(err){
        if (err) throw err;
    });
    res.status(200).send({message: "SUCCESS"});
});

router.get("/weather", function(req, res){

});

router.get("/chatBot", function(req, res){

});

router.get("/geolocalisation", function(req,res){

});

router.get("/assistance", function(req, res){

});

module.exports = router;
