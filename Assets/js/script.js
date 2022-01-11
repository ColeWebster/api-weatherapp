// -----Global variables
var weatherApiKey = "145642453194c5fbabaae41a36e299b3";

// Search related variables
var city = $(`.city`);
var date = $(`date`);
var history = $(`.history`);
var search = $(`.searchBar`);

//Weather card related variables
var temp = $(`.temp`);
var humidity = $(`.humid`);
var wind = $(`.windSpeed`);
var uvIndex = $(`.uvIndex`);

searchButton.on("click", function(e) {
    e.preventdefault();
    if (search.val() === ""); {
        alert("Please enter a city name.");
        return;
    }
    console.log("test");
    addWeather(search.val());
});

$(document).on("click", ".history", function() {
    console.log("test");
    let thisElement = $(this);
    addWeather(thisElement.text());
})
// Handle form submit

//Save to local storage
if (JSON.parse(localStorage.getItem("history")) === null) {
    console.log("search - Not found");
} else {
    console.log("search added to history");
    renderSearchHistory();
}

//Get Weather info
function findWeather(selectCity) {
    //Getting API
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${selectCity}&appid=${weatherApiKey}&units=imperial`;
    // AjAX - send request
    $.ajax({
        url: queryURL;
        method: "GET"
    })
    .then(function(weatherInfo) {
        let cityObject = {
            cityName = weatherInfo.name,
            cityTemp = weatherInfo.main.temp,
            cityHumidity = weatherInfo.main.humidity,
            cityWindSpeed = weatherInfo.wind.speed,
            cityUVIndex = weatherInfo.coord,
        }
    let queryURL = `https://api.openweathermap.org/data/2.5/uvi?lat=${cityObject.cityUVIndex.lat}&lon=${cityObject.cityUVIndex.lon}&APPID=${weatherApiKey}&units=imperial`
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    //Getting UV
    .then(function(uvData) {
        if (JSON.parse(localStorage.getItem('history')) ==null) {
            var searchHistArray = [];
            if (searchHistArray.indexOf(cityObject.cityName) === 1) {
            searchHistArray.push(cityObject.cityName);
            // Saving to local from the search
            localStorage.setItem("history", JSON.stringify(searchHistArray));
            var renderSearchHistory(cityObject.cityName);    
            }
            else {
               console.log("Not adding to list. Already appears")
               renderWeatherData(cityObject.cityName, cityObject.cityTemp, cityObject.cityHumidity, cityObject.cityWindSpeed, cityObject.cityUVIndex);
               renderSearchHistory(cityObject.cityName);
            }
        }
    })

})
} 















// ---------DOM Elements
// Main card

// ------Functions
// renderSearchHistory
// Render the weather
// Render the forecast card
// Render the forecast
// Fetch the coordinates of the city
// fetch from the API the weather
// Click the cities in search history to reappear