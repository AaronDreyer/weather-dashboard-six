var apiKey = "5ea5a9949ddb1597c11f87fc3d143ea6";
var weatherCityNameURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
var searchHistory = $("#search-history");
var storedSearchHistory = loadSearchHistory();

// function for history buttons

// function for loading cities from history buttons from local storage

function loadSearchHistory() {
    var storedSearchHistory = JSON.parse(localStorage.getItem("search history"));

    if (!storedSearchHistory) {
        storedSearchHistory = {
            searchedCity: [],
        };
    } else {
        for (var i = 0; i < storedSearchHistory.searchedCity.length; i++) {
            searchHistoryLayout(storedSearchHistory.searchedCity[i]);
    }
    }

    return storedSearchHistory;
}

function saveSearchHistory() {
    localStorage.setItem("search history", JSON.stringify(storedSearchHistory));
};

function searchHistoryLayout(city) {
    var searchHistoryButton = $("<button>")
        .addClass("btn")
        .text(city)
        .on("click", function () {
            $("#weather-area").remove();
            $('#weather-area-header').empty();
            getWeather(city);
        })
        .attr({
            type: "button"
        });

        searchHistoryLayout.append(searchHistoryButton);

}

