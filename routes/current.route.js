const request = require("request");
const { Router } = require("express");
const { urlTwoLatQuery, urlTwoLongQuery } = require("../configs");
const router = Router();

router.post("/current", function (req, res) {
  const { lat, long } = req.body;
  const url2 = `${urlTwoLatQuery}${lat}${urlTwoLongQuery}${long}`;

  request(url, function (err, _, body) {
    if (err) {
      console.log(err);
    } else {
      const weather = JSON.parse(body);
      const { main, name } = weather;
      const { temp } = main;
      const weatherText = `It's ${Math.floor(temp)} degrees in ${name}!`;
      res.send(weatherText);
    }
  });
});

module.exports = router;
