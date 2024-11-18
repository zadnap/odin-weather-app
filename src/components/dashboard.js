import "../assets/css/dashboard.css";
import {
  airQuality,
  forecast,
  locationInformation,
  periodTemperature,
  todayConditions,
} from "../utils/storage";
import { getTimeOfDay } from "../utils/time";
import { handleSearch } from "../controllers/appController";

function createDashboard() {
  const { address } = locationInformation.get();
  const { temp, status, pressure, visibility, humidity } =
    todayConditions.get();
  const { mainPollutant, aqius, assessment, windDirection } = airQuality.get();
  const { morning, afternoon, evening, night } = periodTemperature.get();
  const tomorrowForecast = forecast.get()[0];

  const dashboard = document.createElement("section");
  dashboard.className = "dashboard";

  const header = `
    <header>
      <div class="say-hello">
        <h1>Hello, <span>User</span></h1>
      </div>
      <form class="location-search">
        <input 
          type="text" 
          placeholder="Search anything ..." 
          spellcheck="false" 
          autocomplete="off"
          value="${address}"
        >
        <i class="fa-solid fa-magnifying-glass"></i>
      </form>
      <button class="toggle-appearance">
        <i class="fa-solid fa-sun"></i>
        <i class="fa-solid fa-moon"></i>
      </button>
    </header>
  `;

  const dashboardBody = `
    <section class="dashboard-body">
      <div class="today-conditions weather">
        <div class="head">
          <div class="icon"><i class="fa-regular fa-sun"></i></div>
          <div>
            <h3>Weather</h3>
            <p>What's the weather</p>
          </div>
        </div>
        <div class="main-content">
          <h3>${temp}°C</h3>
          <p>${status}</p>
        </div>
        <div class="sub-content">
          <div class="pressure">
            <p>Pressure</p>
            <strong>${pressure} mb</strong>
          </div>
          <div class="visibility">
            <p>Visibility</p>
            <strong>${visibility} km</strong>
          </div>
          <div class="humidity">
            <p>Humidity</p>
            <strong>${humidity}%</strong>
          </div>
        </div>
      </div>
      <div class="today-conditions air-quality">
        <div class="head">
          <div class="icon"><i class="fa-solid fa-wind"></i></div>
          <div>
            <h3>Air Quality</h3>
            <p>Main Pollutant: ${mainPollutant}</p>
          </div>
        </div>
        <div class="main-content">
          <h3>${aqius} <span class="aqi">AQI</span></h3>
          <p>${windDirection} Wind</p>
        </div>
        <div class="sub-content air-assessment">
          <div class="level">
            <p>Good</p>
            <p>Hazardous</p>
          </div>
          <div class="air-progress">
            <progress value="${assessment.level}" max="50"></progress>
            <div class="tooltip">${assessment.status}</div>
          </div>
        </div>
      </div>
      <div class="day-period">
        <h1>How's the temperature today?</h1>
        <ul>
          <li class="period-forecast ${getTimeOfDay() === "morning" ? "now" : ""}">
            <div class="icon"><i class="fa-solid fa-sun"></i></div>
            <h3>${morning}°C</h3>
            <p>Morning</p>
          </li>
          <li class="period-forecast ${getTimeOfDay() === "afternoon" ? "now" : ""}">
            <div class="icon"><i class="fa-solid fa-sun"></i></div>
            <h3>${afternoon}°C</h3>
            <p>Afternoon</p>
          </li>
          <li class="period-forecast ${getTimeOfDay() === "evening" ? "now" : ""}">
            <div class="icon"><i class="fa-solid fa-sun"></i></div>
            <h3>${evening}°C</h3>
            <p>Evening</p>
          </li>
          <li class="period-forecast ${getTimeOfDay() === "night" ? "now" : ""}">
            <div class="icon"><i class="fa-solid fa-sun"></i></div>
            <h3>${night}°C</h3>
            <p>Night</p>
          </li>
        </ul>
      </div>
      <div class="tomorrow">
        <h3>Tomorrow</h3>
        <h1>${Math.floor((tomorrowForecast.maxTemp + tomorrowForecast.minTemp) / 2)}°C</h1>
        <p>${tomorrowForecast.status}</p>
      </div>
    </section>
  `;

  dashboard.innerHTML = header + dashboardBody;

  const locationSearchForm = dashboard.querySelector(".location-search");
  const locationSearchInput = dashboard.querySelector(".location-search input");
  locationSearchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (locationSearchInput.value) {
      handleSearch(locationSearchInput.value);
    }
  });

  return dashboard;
}

export default createDashboard;
