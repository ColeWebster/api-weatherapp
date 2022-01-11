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
        alert("Please enter a city name.")
    }
})

// ---------DOM Elements
// Main card

// ------Functions
// renderSearchHistory
// Append to search history
// Render the weather
// Render the forecast card
// Render the forecast
// fetch from the API the weather
// Fetch the coordinates of the city
// Handle form submit
// Click the cities in search history to reappear