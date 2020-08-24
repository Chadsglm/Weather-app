const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2417b574ae42608c90c7494bdf4a3cdd&query=${longitude},${latitude}`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback(`Unable to find location.`, undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} outside. It feels like ${body.current.feelslike}. There is a ${body.current.precip}% chance of rain.`, undefined)
        }
    })
}

module.exports = forecast