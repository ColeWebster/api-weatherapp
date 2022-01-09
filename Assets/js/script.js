//function that will save to local storage
//a way to pull items from local storage
//Utilize the weather api
//Use information from API to build the display (BOOTSTRAP)
// Needs to dynamically change based on the information pull by the API (aka each city)


// -----Global variables
var weatherApiURL = "https://api.openweathermap.org";
var weatherApiKey = "145642453194c5fbabaae41a36e299b3";

var searchInput = document.querySelector("#search-text");
var searchForm = document.querySelector("#search-form");
var searchList = document.querySelector("#search-list");
var searchCount = document.querySelector("#search-count");

var cities = [];
//todos

//renderTodos
function renderSearch() {
  searchList.innerHTML = "";
  searchCountSpan.textcontent = cities.length;

  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];

    var li = document.createElement('li');
    li.textContent = city
    li.setAttribute('data-index', i);

    var button = document.createElement('button');
    button.textContent = "Remove";

    li.appendChild(button);
    searchList.appendChild(li);
  }
}

function init() {
  var storedCities = JSON.parse(localStorage.getitem('cities'));
  if (storedCities !== null) {
    cities = storedCities;
  }
  renderSearch();
}

function storedCities() {
  localStorage.setItem("cities", JSON.stringify(cities));
}

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var cityText = cityText.value.trim();
  if (cityText === "") {
    return;
  }
  cities.push(cityText);
  searchInput.value = "";

  storedCities();
  renderSearch();

});

searchList.addEventListener('click',function(event){
  var element = event.target;

  if (element.matches('button') === true) {
    var index = element.parentElement.getattribute('data-index');
    todos.splice(index, 1);
  }
  storedCities();
  renderSearch();
});

init()









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