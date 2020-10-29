const request = require("request");
const { Router } = require("express");
const router = Router();
const { apiKey, urlOneApiKey, urlOneCityQuery } = require("../configs");

router.get("/", (_, res) =>
  res.render("index", { weather: null, error: null })
);

router.post("/", (req, res) => {
  console.log(req.body);
  let city = req.body.city;
  let url = `${urlOneApiKey}${city}${urlOneCityQuery}${apiKey}`;
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
