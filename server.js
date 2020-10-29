const express = require("express");
const request = require("request");
const homeRoute = require("./routes/home.route");

const app = express();

const apiKey = "40664328cd433cd246010dd987e888fe";

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);

app.post("/current", function (req, res) {
  let lat = req.body.latitude;
  let long = req.body.longitude;
  let url2 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}`;
  request(url, function (err, response, body) {
    if (err) {
      console.log(err);
    } else {
      let weather = JSON.parse(body);
      console.log(weather);
      let weatherText = `It's ${Math.floor(weather.main.temp)} degrees in ${
        weather.name
      }!`;
      res.send(weatherText);
    }
  });
});

app.listen(4000, function () {
  console.log("Example app listening on port 4000!");
});
