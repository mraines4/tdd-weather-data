

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
    return obj.weather.map(function (each) {
        return each.description;
    });
}
function getWindSpeed(obj) {
    return obj.wind.speed;
}
function getSunrise(obj) {
    return obj.sys.sunrise;
}
function getTemperature(obj) {
    return obj.main.temp;
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

// Using the tdd-weather repo as your starter code, create and append DOM elements that show the following information:
// city name
// temperature
// wind speed

const weatherDiv = document.querySelector('[data-weather]');

// const iconUrl = 'http://openweathermap.org/img/w/11d.png'

function getIcon(obj) {
    return obj.weather[0].icon;
}

function weatherPic (get) {
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', `http://openweathermap.org/img/w/${get}.png`);
    return imgTag;
}


const cityName = document.createElement('p');
weatherDiv.append(cityName);

const temperature = document.createElement('p');
weatherDiv.append(temperature);

const windSpeed = document.createElement('p');
weatherDiv.append(windSpeed);


function getSunrise (obj) {
    return obj.sys.sunrise;
}
function getSunset (obj) {
    return obj.sys.sunset;
}

function convertTime(unix_timestamp) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return formattedTime
}


const sunrise = document.createElement('p');
weatherDiv.append(sunrise);

const sunset = document.createElement('p');
weatherDiv.append(sunset);

const map = document.createElement('iframe');
map.setAttribute('width', '100%');
map.setAttribute('height', 450);
map.setAttribute('frameborder', 0);
map.setAttribute('style', 'border:0');
weatherDiv.append(map);

let theWeather;
const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas,us&units=imperial&appid=1efd23d575e7f6ab1b69c24ba772d747';
fetch(url)
.then(function(response) { 
    return response.json() 
})
.then(function(weatherData) { 
    console.log(weatherData);
    theWeather = weatherData;
    weatherDiv.append(weatherPic(getIcon(theWeather)))
    cityName.textContent = `City: ${getLocationName(theWeather)}`;
    temperature.textContent = `Temperature: ${getTemperature(theWeather)}℉`;
    windSpeed.textContent = `Windspeed: ${getWindSpeed(theWeather)}`;
    sunrise.textContent = `Sunrise: ${convertTime(getSunrise(theWeather))}`;
    sunset.textContent = `Sunset: ${convertTime(getSunset(theWeather))}`;
    map.setAttribute('src', `http://maps.google.com/maps?q=${getLocationLatitude(theWeather)}, ${getLocationLongitude(theWeather)}&z=15&output=embed`);
});

