const request = require("request");
const { nullValue, error } = require("../configs");

exports.requestWeather = (urlString, responseObject) =>
  request(urlString, function (requestErr, _, body) {
    if (requestErr) {
      responseObject.render("index", {
        weather: nullValue,
        error,
      });
    } else {
      const weatherResponse = JSON.parse(body);
      const { main, name } = weatherResponse;
      const { temp } = main;
      const weather = `It's ${Math.floor(temp)} degrees in ${name}!`;

      main == undefined
        ? responseObject.render("index", {
            weather: nullValue,
            error,
          })
        : responseObject.render("index", { weather, error: nullValue });
    }
  });
