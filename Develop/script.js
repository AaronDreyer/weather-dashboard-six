// Arrays for current and past cities entered
let searchHistory = []
let cityData = ""
// Variables for API URLs and API key
var initialUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var apiKey = "5ea5a9949ddb1597c11f87fc3d143ea6";
var coordUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=";

// API call to OpenWeather
let getWeather = function(city) {
    // Format for OpenWeather API
    // Entered "city" to retrieve city data
    let apiUrl = initialUrl + city + "&appid=" + apiKey + "&units=imperial";

// Fetch the data from API call
    fetch(apiUrl)
        
    // Function to display city data 
    // Accessing response and if response is "ok" (completed) then weather will be displayed
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    // Future function
                    displayWeather(data);
                });

            }
        })  
};

// Function for the any submittion within the html form
let formSubmit = function(event) {
    // Prevents event from refreshing
    event.preventDefault();

    // Input section for form
    // city id for any city value entered
    let citySearch = $("#city").val().trim();

    // if statement for city search and if city entered is within getWeather's API call data then display weather
    if(citySearch) {

        // gets city data from getWeather
        getWeather(citySearch);

        // Clears search input
        $("#city").val("");
    } 
};