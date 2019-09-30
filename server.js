const express = require('express')
const app = express()

const bodyParser = require('body-parser');

const request = require('request');
const apiKey = '40664328cd433cd246010dd987e888fe'

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
   res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  console.log(req.body)
  let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  request(url, function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherResponse = JSON.parse(body)
        console.log(weatherResponse)
        if(weatherResponse.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
          let weather = `It's ${Math.floor(weatherResponse.main.temp)} degrees in ${weatherResponse.name}!`;
          res.render('index', {weather, error: null});
        }
      }
    });
})

app.post('/current', function(req,res) {
  let lat = req.body.latitude;
  let long = req.body.longitude;
  let url2 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}`;
  request(url, function (err, response, body) {
    if(err){
      console.log(err)
    }
    else{
      let weather = JSON.parse(body)
      console.log(weather)
      let weatherText = `It's ${Math.floor(weather.main.temp)} degrees in ${weather.name}!`;
      res.send(weatherText)
    }
  })
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})
