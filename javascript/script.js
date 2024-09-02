// Weather API
// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=fb85986ca4be306e4ef21b120af88058&units=metric

const apiKey = "fb85986ca4be306e4ef21b120af88058";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
  document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "./images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "./images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "./images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "./images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "./images/mist.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})
