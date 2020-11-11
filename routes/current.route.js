const { Router } = require("express");
const { requestCurrentLocationWeather } = require("../services");
const { urlTwoLatQuery, urlTwoLongQuery } = require("../configs");

const router = Router();

router.post("/current", function (req, res) {
  const { lat, long } = req.body;
  const url2 = `${urlTwoLatQuery}${lat}${urlTwoLongQuery}${long}`;

  requestCurrentLocationWeather(url2, res);
});

module.exports = router;
