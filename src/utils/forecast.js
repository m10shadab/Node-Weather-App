const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=09bb0c53caf7d2f0c4850087dcd6a302&query='+ latitude + ' , ' + longitude + '&units'

    request({ url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to the weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find the location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees. But feels like " + body.current.feelslike + " degrees.")
        }
    }
    )
}



module.exports = forecast