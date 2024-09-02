// Weather API
// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=fb85986ca4be306e4ef21b120af88058&units=metric

const apiKey = "fb85986ca4be306e4ef21b120af88058";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=manila";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
  document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;
}

checkWeather();
