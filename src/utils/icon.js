function getFontAwesomeIcon(weatherIcon) {
  const iconMapping = {
    "clear-day": "fa-sun",
    "clear-night": "fa-moon",
    "partly-cloudy-day": "fa-cloud-sun",
    "partly-cloudy-night": "fa-cloud-moon",
    cloudy: "fa-cloud",
    rain: "fa-cloud-showers-heavy",
    snow: "fa-snowflake",
    sleet: "fa-cloud-meatball",
    wind: "fa-wind",
    fog: "fa-smog",
    thunderstorm: "fa-bolt",
    hail: "fa-cloud-hail",
  };

  return iconMapping[weatherIcon] || "fa-question-circle";
}

export { getFontAwesomeIcon };
