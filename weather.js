const weather = document.querySelector(".weather");
const API_KEY = "6d6c9ec20118631d4a6f47d45aae630c";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.dir(json);
      const place = json.name;
      weather.innerText = `@ ${place}`;

      const weatherIcon = document.createElement("img");
      weatherIcon.src =
        "https://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png";
      weatherIcon.style.width = "50px";
      weatherIcon.style.height = "50px";
      weatherIcon.className = "weather";
      weather.appendChild(weatherIcon);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError() {}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
