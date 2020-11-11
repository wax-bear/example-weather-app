const request = require("request");
const { nullValue, error } = require("../configs");

exports.requestWeather = (urlString, responseObject) =>
  request(urlString, function (err, _, body) {
    if (err) {
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

  exports.requestCurrentLocationWeather = (urlString, responseObject) => {
    request(urlString, function (err, _, body) {
      if (err) {
        console.log(err);
      } else {
        const weather = JSON.parse(body);
        const { main, name } = weather;
        const { temp } = main;
        const weatherText = `It's ${Math.floor(temp)} degrees in ${name}!`;
        
        responseObject.send(weatherText);
      }
    });
  }
