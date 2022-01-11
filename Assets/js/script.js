// -----Global variables
var weatherApiURL = "https://api.openweathermap.org";
var weatherApiKey = "145642453194c5fbabaae41a36e299b3";


// Search related variables
var city = $(".city");
var date = $("date");
var history = $(".history");
var search = $(".searchBar")

//Weather card related variables
var temp = $(".temp");
var humidity = $(".humid");
var wind = $(".windSpeed");
var uvIndex = $(".uvIndex");

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
// Append to search history















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