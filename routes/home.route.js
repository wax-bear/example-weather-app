const { Router } = require("express");
const { requestWeather } = require("../services");
const {
  apiKey,
  urlOneApiKey,
  urlOneCityQuery,
  nullValue,
} = require("../configs");
const router = Router();

router.get("/", (_, res) =>
  res.render("index", { weather: nullValue, error: nullValue })
);

router.post("/", (req, res) => {
  const { city } = req.body;
  const url = `${urlOneCityQuery}${city}${urlOneApiKey}${apiKey}`;
  
  requestWeather(url, res);
});

module.exports = router;
