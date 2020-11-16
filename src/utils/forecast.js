const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=438d0dff42dd5737d3141add69c52e97&query=' + longitude + ',' + latitude + '&units=f'
      
    request({ url, json: true}, (error, { body }) => {
        if(error) {
          callback('cannot connect to weather app!', undefined);
        } else if(body.error) {
          callback('cannot find location!', undefined);
        } else {
          const currentTemp = body.current.temperature; 
          const feelslike = body.current.feelslike;
          const finalString = body.current.weather_descriptions[0] + '. It is currently ' + currentTemp + ' degrees out. It feels like ' + feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.';
          callback(undefined, finalString);
        }
    })
    }

    module.exports = forecast