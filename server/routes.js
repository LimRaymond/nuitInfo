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
    res.send({message: "oui"});
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
    var longitude;
    var lattitude;
        helper.getCurrentWeatherByGeoCoordinates(48.58364410000001, 7.7494288, (err, currentWeather) => {
            if(err){
                let result = {title: "Error", content: "Invalid Coordinate"};
                res.send({message: result});
            }
            else{
                let string = JSON.stringify(currentWeather);
                let objectValue = JSON.parse(string);
                let temperature = objectValue['main'].temp;
                let humidity = objectValue['main'].humidity;
                let pressure = objectValue['main'].pressure;
                let windSpeed = objectValue['wind'].speed;
                let windDeg = objectValue['wind'].deg;
                let city = objectValue.name; 
                let result = {
                    title: "Météo à " + city,
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
                        let temperature = objectValue['main'].temp;
                        let humidity = objectValue['main'].humidity;
                        let pressure = objectValue['main'].pressure;
                        let windSpeed = objectValue['wind'].speed;
                        let windDeg = objectValue['wind'].deg;
                        let city = objectValue.name; 
                        let resultFore = {
                            title: result.title + " dans 3 heures",
                            temperature: Math.round(temperature) - 273 + "°C",
                            humidity: humidity + "%",
                            pressure: pressure + " pa",
                            windSpeed: windSpeed + " km/h",
                            windDeg: windDeg + "°"
                        };
                        console.log(currentWeather.list[0]);
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
