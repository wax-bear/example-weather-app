exports.getWeatherMessage = (weatherData) => {
    if (!weatherData.main) throw 'Error, no weather data';
    const degreesNumber = Math.floor(weatherData.main.temp);
    const weatherMessage = `It's ${degreesNumber} degrees in ${weatherData.name}!`;

    return weatherMessage;
}