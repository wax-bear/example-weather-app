const { Router } = require("express");
const router = Router();

router.post("/current", function (req, res) {
  let lat = req.body.latitude;
  let long = req.body.longitude;
  let url2 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}`;
  request(url, function (err, _, body) {
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

module.exports = router;
