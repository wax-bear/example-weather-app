const { Router } = require("express");
const router = Router();

router.get("/", (_, res) =>
  res.render("index", { weather: null, error: null })
);

router.post("/", (req, res) => {
  console.log(req.body);
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  request(url, function (err, response, body) {
    if (err) {
      res.render("index", { weather: null, error: "Error, please try again" });
    } else {
      let weatherResponse = JSON.parse(body);
      console.log(weatherResponse);
      if (weatherResponse.main == undefined) {
        res.render("index", {
          weather: null,
          error: "Error, please try again",
        });
      } else {
        let weather = `It's ${Math.floor(
          weatherResponse.main.temp
        )} degrees in ${weatherResponse.name}!`;
        res.render("index", { weather, error: null });
      }
    }
  });
});

module.exports = router;
