const express = require("express");
const router = express.Router();
const OpenWeatherMapHelper = require('openweathermap-node');
const request = require("request");
var TaskSchema = require('./todolist');
var task;

const helper = new OpenWeatherMapHelper({
    APPID: "1bf8fafe66882bb705ce1b6efb3c0cae",
    units: "metric"
});

router.get("/", function(res, req){

});

router.get("/todoList", function(req, res){
    TaskSchema.find({}, function (err, data) {
        var idInstance = [];
        var taskList = [];
        var titleList = []
        for (var i = 0; i < data.length; i++) {
            titleList.push(data[i].title);
            taskList.push(data[i].task);
            idInstance.push(data[i].userId);
        }
        res.send({ titleList: titleList, taskList: taskList, idInstance: idInstance });
    });
});

router.get("/addTask", function(req, res){
    res.redirect("/todoList");
});

router.post("/addTask", function(req, res){
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    }
    var Task = new TaskSchema({
        userId: makeid(),
        title: req.body.title,
        task: req.body.task
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
    var longitude;
    var lattitude;
        helper.getCurrentWeatherByGeoCoordinates(48.58364410000001, 7.7494288, (err, currentWeather) => {
            if(err){
                let result = {title: "Error", content: "Invalid Coordinate"};
                res.send({message: result});
            }
            else{
                console.log(currentWeather);
                let string = JSON.stringify(currentWeather);
                let objectValue = JSON.parse(string);
                let weather = objectValue['weather'][0].main;
                let temperature = objectValue['main'].temp;
                let humidity = objectValue['main'].humidity;
                let pressure = objectValue['main'].pressure;
                let windSpeed = objectValue['wind'].speed;
                let windDeg = objectValue['wind'].deg;
                let city = objectValue.name; 
                let result = {
                    title: "Météo à " + city,
                    weather: weather,
                    temperature: Math.round(temperature) - 273 + "°C",
                    humidity: humidity + "%",
                    pressure: pressure + " pa",
                    windSpeed: windSpeed + " km/h",
                    windDeg: windDeg + "°"
                };
                helper.getThreeHourForecastByGeoCoordinates(48.58364410000001, 7.7494288, (err, currentWeather) => {
                    if(err){
                        let resultFore = {title: "Error", content: "Invalid Coordinate"};
                        res.send({message: result});
                    }
                    else{
                        let string = JSON.stringify(currentWeather.list[0]);
                        let objectValue = JSON.parse(string);
                        let weather = objectValue['weather'][0].main;
                        let temperature = objectValue['main'].temp;
                        let humidity = objectValue['main'].humidity;
                        let pressure = objectValue['main'].pressure;
                        let windSpeed = objectValue['wind'].speed;
                        let windDeg = objectValue['wind'].deg;
                        let city = objectValue.name; 
                        let resultFore = {
                            title: result.title + " dans 3 heures",
                            weather: weather,
                            temperature: Math.round(temperature) - 273 + "°C",
                            humidity: humidity + "%",
                            pressure: pressure + " pa",
                            windSpeed: windSpeed + " km/h",
                            windDeg: windDeg + "°"
                        };
                        res.send({Current: result, Fore: resultFore});
                    }
                });
            }
        });
});

router.get("/chatBot", function(req, res){

});

router.get("/geolocalisation", function(req,res){

});

router.get("/assistance", function(req, res){

});

module.exports = router;
