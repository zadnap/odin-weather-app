import "../assets/css/dashboard.css";

function createDashboard() {
  const dashboard = document.createElement("section");
  dashboard.className = "dashboard";

  const header = `
    <header>
      <div class="say-hello">
        <h1>Hello, <span>User</span></h1>
      </div>
      <form class="location-search">
        <input type="text" placeholder="Search anything ..." spellcheck="false" autocomplete="off">
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
          <h3>22°C <span>11°C</span></h3>
          <p>Partly Cloudy</p>
        </div>
        <div class="sub-content">
          <div class="pressure">
            <p>Pressure</p>
            <strong>800mb</strong>
          </div>
          <div class="visibility">
            <p>Visibility</p>
            <strong>4.3 km</strong>
          </div>
          <div class="humidity">
            <p>Humidity</p>
            <strong>87%</strong>
          </div>
        </div>
      </div>
      <div class="today-conditions air-quality">
        <div class="head">
          <div class="icon"><i class="fa-solid fa-wind"></i></div>
          <div>
            <h3>Air Quality</h3>
            <p>Main Pollutant: PM 2.5</p>
          </div>
        </div>
        <div class="main-content">
          <h3>390 <span class="aqi">AQI</span></h3>
          <p>West Wind</p>
        </div>
        <div class="sub-content air-assessment">
          <div class="level">
            <p>Good</p>
            <p>Hazardous</p>
          </div>
          <div class="air-progress">
            <progress value="30" max="100"></progress>
            <div class="tooltip">Standard</div>
          </div>
        </div>
      </div>
      <div class="day-period">
        <h1>How's the temperature today?</h1>
        <ul>
          <li class="period-forecast">
            <div class="icon"><i class="fa-solid fa-sun"></i></div>
            <h3>20°C</h3>
            <p>Morning</p>
          </li>
          <li class="period-forecast">
            <div class="icon"><i class="fa-solid fa-sun"></i></div>
            <h3>20°C</h3>
            <p>Afternoon</p>
          </li>
          <li class="period-forecast now">
            <div class="icon"><i class="fa-solid fa-sun"></i></div>
            <h3>20°C</h3>
            <p>Evening</p>
          </li>
          <li class="period-forecast">
            <div class="icon"><i class="fa-solid fa-sun"></i></div>
            <h3>20°C</h3>
            <p>Night</p>
          </li>
        </ul>
      </div>
      <div class="tomorrow">
        <h3>Tomorrow</h3>
        <h1>20°C</h1>
        <p>Rainny</p>
      </div>
    </section>
  `;

  dashboard.innerHTML = header + dashboardBody;

  return dashboard;
}

export default createDashboard;
