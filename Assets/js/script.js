//function that will save to local storage
//a way to pull items from local storage
//Utilize the weather api
//Use information from API to build the display (BOOTSTRAP)
// Needs to dynamically change based on the information pull by the API (aka each city)


// -----Global variables
var searchHistory = [];
var weatherApiURL = "https://api.openweathermap.org";
var weatherApiKey = "145642453194c5fbabaae41a36e299b3";
var searchBtn = document.querySelector("#searchBtn");


// Search button
    //adding event listener for the search button
searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    //testing functionality
    console.log("Hello");
    var citySearch = document.querySelector("#citySearch").value;
    localStorage.setItem("citySearch", citySearch);
    displayLastSearch();
})
    //grabbing search from local storage
function displayLastSearch() {
    var city = localStorage.getItem("citySearch");
    searchHistorySpan.textContent = city;
}

displayLastSearch();

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