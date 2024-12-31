function displayCurrentTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
}
function searchCity(city) {
  let apiKey = "10f93091ao9cdtf74b038641f13d04bd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayCurrentTemperature);
}
function displayCity(event) {
  event.preventDefault();
  searchInputElement = document.querySelector(".search-input");
  searchCity(searchInputElement.value);
}
searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);

searchCity("Lagos");
