const request = require ('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoid3BpZXNjaGVsIiwiYSI6ImNrOXR1a3VlZTFrNmwzZHBqYjc2dmViZXMifQ.P--8Q8sxRBf7vPoB4ikU-w'
    
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }  
    })
}

module.exports = geocode