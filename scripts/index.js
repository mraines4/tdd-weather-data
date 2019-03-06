
// Implement the following functions to fulfill the tests!
function getLocationName(obj) {
    return obj.name;
}
function getLocationCountry(obj) {
    return obj.sys.country;
}
function getLocationLatitude(obj) {
    return obj.coord.lat;
}
function getLocationLongitude(obj) {
    return obj.coord.lon;
}
function getDescription(obj) {
    return obj.weather[0].description;
}
function getWindSpeed(obj) {
}
function getSunrise(obj) {
}


// Please ignore the following
try {
    module.exports = {
        getLocationName,
        getLocationCountry,
        getLocationLatitude,
        getLocationLongitude,
        getDescription,
        getWindSpeed,
        getSunrise
    }
} catch (e) {
    
}