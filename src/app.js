function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  //calling API and search for the city
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function searchCity(city) {
  //make api call and update the interface
  //create a new function because of the rule- the SEPARATION OF CONCERN. Function should only do one thing, and do it well
  let apiKey = "dc027835t447909af572ffob036660a3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

searchCity(searchInput.value);

function refreshWeather(response) {
  console.log(response.data);
}
