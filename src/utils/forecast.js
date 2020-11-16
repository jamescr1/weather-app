const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=438d0dff42dd5737d3141add69c52e97&query=37.8267,-122.4233&units=f';
// request({url: url, json: true}, (error, response) => {
//     if(error) {
//         console.log('cannot connect to weather app!')
//     } else if (response.body.error) {
//         console.log('cannot find location!')
//     } else {
//     const currentTemp = response.body.current.temperature;
//     const feelslike = response.body.current.feelslike;
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + currentTemp + ' degrees out. It feels like ' + feelslike + ' degrees out.')
//     }
// });

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
          const finalString = body.current.weather_descriptions[0] + '. It is currently ' + currentTemp + ' degrees out. It feels like ' + feelslike + ' degrees out.';
          callback(undefined, finalString);
        }
    })
    }

    module.exports = forecast