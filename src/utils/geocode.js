const request = require('request')

// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoidHlyZWtlNTk5NCIsImEiOiJja2hhcnowNHMxN2F3MnFucWFiNmNtcTR5In0.au3TpXiCtAIO3JGt_wlHEw&limit=1'
// request({url: geocodeURL, json: true}, (error, response) => {
//     if(error) {
//         console.log('cannot connect to locater app!')
//     } else if(response.body.features.length === 0) {
//         console.log('location not found! Please check location you have entered is correct')
//     } else {
//     const longitude = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];
//     console.log(longitude, latitude);
//     }
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHlyZWtlNTk5NCIsImEiOiJja2hhcnowNHMxN2F3MnFucWFiNmNtcTR5In0.au3TpXiCtAIO3JGt_wlHEw&limit=1'
   
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

