function displayCity(event) {
  event.preventDefault();
  searchInputElement = document.querySelector(".search-input");
let h1 = document.querySelector("h1")
h1.innerHTML = searchInputElement.value
}
searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);
