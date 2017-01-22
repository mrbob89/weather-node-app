const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/92df2b0c0e1cc215481af5b4d93a58e2/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        // if (error) {
        //     console.log('Unable to connect to Forecast.io server.');
        // } else if (response.statusCode === 400) {
        //     console.log('Unable to fetch weather.');
        // } else if (response.statusCode === 200) {
        //     console.log(body.currently.temperature);
        // }
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;
