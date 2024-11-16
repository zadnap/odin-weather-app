import "../assets/css/sidebar.css";

function createSidebar() {
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";

  const weatherHeader = `
    <div class="weather-header">
        <div>
            <h3>Sun</h3>
            <p>Banten, Indonesia</p>
        </div>
        <h2>22°C</h2>
    </div>
  `;

  const sunTransition = `
    <div class="sun-transition">    
        <div class="sun-path">
            <div class="sun"><i class="fa-solid fa-sun"></i></div>
            <div class="progress-bar"></div>
        </div>
        <div class="time-labels">
            <div class="sunset">
                <p>Sunset</p>
                <span>06:00 am</span>
            </div>
            <div class="sunrise">
                <p>Sunrise</p>
                <span>06:45 am</span>
            </div>
        </div>
    </div>
  `;

  const uvIndex = `
    <div class="uv-index">
        <div class="icon"><i class="fa-solid fa-sun"></i></div>
        <div class="content">
            <h3>20 UVI <span class="moderate">Moderate</span></h3>
            <p>Moderate risk from UV rays</p>
        </div>
    </div>
  `;

  const weatherForecast = `
    <div class="weather-forecast">
        <h1>Weather Forecast</h1>
        <ul>
            <li class="day-forecast">
                <div class="icon"><i class="fa-solid fa-cloud-sun"></i></div>
                <div>
                    <p class="date">November 10</p>
                    <p class="condition">Cloudy</p>
                </div>
                <div class="temp">
                    <span class="max">26°C</span> / <span class="min">19°C</span>
                </div>
            </li>
            <li class="day-forecast">
                <div class="icon"><i class="fa-solid fa-cloud-sun"></i></div>
                <div>
                    <p class="date">November 11</p>
                    <p class="condition">Cloudy</p>
                </div>
                <div class="temp">
                    <span class="max">26°C</span> / <span class="min">19°C</span>
                </div>
            </li>
        </ul>
        <button class="more-forecast">
            <i class="fa-regular fa-calendar"></i>
            <span>Next 5 Days</span>
        </button>
    </div>
  `;

  sidebar.innerHTML = weatherHeader + sunTransition + uvIndex + weatherForecast;

  return sidebar;
}

export default createSidebar;
