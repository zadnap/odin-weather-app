import {
  airQuality,
  forecast,
  locationInformation,
  periodTemperature,
  sunTransition,
  todayConditions,
  uvIndex,
} from "../utils/storage";
import Weather from "../utils/weather";

async function handleSearch(location) {
  try {
    const weather = new Weather(location);
    await weather.loadWeatherTimeline();

    locationInformation.set(weather.getLocationInformation());
    todayConditions.set(weather.getTodayConditions());
    airQuality.set(weather.getTodayAirQuality());
    sunTransition.set(weather.getTodaySunTransition());
    uvIndex.set(weather.getTodayUVIndex());
    periodTemperature.set(weather.getTodayPeriodTemperatures());
    forecast.set(weather.getForecast());
  } catch {
    console.log("Do not store in local storage and display errors");
  }
}

export { handleSearch };
