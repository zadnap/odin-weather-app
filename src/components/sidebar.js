import "../assets/css/sidebar.css";

import {
  locationInformation,
  todayConditions,
  sunTransition,
  uvIndex,
  forecast,
} from "../utils/storage.js";

function createSidebar() {
  const { address } = locationInformation.get();
  const { temp, status } = todayConditions.get();
  const { sunrise, sunset } = sunTransition.get();
  const { index, level } = uvIndex.get();
  const forecastList = forecast.get();

  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";

  const weatherHeaderHTML = `
    <div class="weather-header">
        <div>
            <h3>${status}</h3>
            <p>${address}</p>
        </div>
        <h2>${temp}°C</h2>
    </div>
  `;

  const sunTransitionHTML = `
    <div class="sun-transition">    
        <div class="sun-path">
            <div class="sun"><i class="fa-solid fa-sun"></i></div>
            <div class="progress-bar"></div>
        </div>
        <div class="time-labels">
            <div class="sunset">
                <p>Sunset</p>
                <span>${sunrise}</span>
            </div>
            <div class="sunrise">
                <p>Sunrise</p>
                <span>${sunset}</span>
            </div>
        </div>
    </div>
  `;

  const uvIndexHTML = `
    <div class="uv-index">
        <div class="icon"><i class="fa-solid fa-sun"></i></div>
        <div class="content">
            <h3>${index} UVI <span class="moderate">${level}</span></h3>
            <p>${level} risk from UV rays</p>
        </div>
    </div>
  `;

  const weatherForecastHTML = `
    <div class="weather-forecast">
        <h1>Weather Forecast</h1>
        <ul>
            ${forecastList
              .map((forecast) => {
                return `
                    <li class="day-forecast">
                        <div class="icon"><i class="fa-solid fa-cloud-sun"></i></div>
                        <div>
                            <p class="date">${forecast.date}</p>
                            <p class="condition">${forecast.status}</p>
                        </div>
                        <div class="temp">
                            <span class="max">${forecast.maxTemp}°C</span> / <span class="min">${forecast.minTemp}°C</span>
                        </div>
                    </li>
                `;
              })
              .join("")}
        </ul>
        <button class="more-forecast">
            <i class="fa-regular fa-calendar"></i>
            <span>Next 5 Days</span>
        </button>
    </div>
  `;

  sidebar.innerHTML =
    weatherHeaderHTML + sunTransitionHTML + uvIndexHTML + weatherForecastHTML;

  return sidebar;
}

export default createSidebar;
