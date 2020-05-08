const request = require ('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=0f0a80ce119f0a5e969011c16d959612'
    
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.message) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, {
                forecastData: `It is currently ${body.current.temp} degrees Celcius, and the humidity is ${body.current.humidity}%. 
                The weather is ${body.current.weather[0].description}.`

            }
            )
            //console.log(body.current.weather[0].description)
        }  
    })
}

module.exports = forecast