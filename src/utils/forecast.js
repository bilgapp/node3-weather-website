const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4864c9a477cf15db2420af955dee309e&query=' + lat + ',' + lon

    request({ url, json: true }, (error, { body } ) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (! body.current) {
            callback('Unable to get forecast for given point', undefined)
        } else {
            const info = body.current
            callback(undefined, 
                info.weather_descriptions + 
                '. Temp is ' + info.temperature + 
                ', feels like ' + info.feelslike +
                ', humidity is ' + info.humidity)
       }
    })

}

module.exports = forecast