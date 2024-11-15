import { formatDateToLongMonth, formatTimeTo12Hour } from "./date";
import { computeDayPeriodTemperatures } from "./dayPeriodTemperature";
import { getUVLevel } from "./uvIndex";

class Weather {
  static BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services";
  static API_KEY = "3AAZGYEHZ3TFBP8PL9JLQWAVD";

  #weatherTimeline = null;

  constructor(location) {
    this.location = location;
  }

  async #fetchWeatherTimeline(location) {
    const url = `${Weather.BASE_URL}/timeline/${location}?unitGroup=metric&key=${Weather.API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data.");
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }

  async loadWeatherTimeline() {
    this.#weatherTimeline = await this.#fetchWeatherTimeline(this.location);
  }

  getLocationInformation() {
    return { address: this.#weatherTimeline.resolvedAddress };
  }

  getTodayConditions() {
    const {
      temp,
      pressure,
      visibility,
      humidity,
      conditions: status,
      icon,
    } = this.#weatherTimeline.currentConditions;

    return {
      temp,
      pressure,
      visibility,
      humidity,
      status,
      icon,
    };
  }

  getTodaySunTransition() {
    const { sunrise, sunset } = this.#weatherTimeline.currentConditions;

    return {
      sunrise: formatTimeTo12Hour(sunrise),
      sunset: formatTimeTo12Hour(sunset),
    };
  }

  getTodayUVIndex() {
    const { uvindex } = this.#weatherTimeline.currentConditions;

    return {
      uvindex: uvindex,
      uvlevel: getUVLevel(uvindex),
    };
  }

  getTodayPeriodTemperatures() {
    const todayHourlyTemperature = this.#weatherTimeline.days[0].hours.map(
      (hour) => hour.temp,
    );

    return computeDayPeriodTemperatures(todayHourlyTemperature);
  }

  getForecast(dayRange = 2) {
    const { days } = this.#weatherTimeline;
    const processedDays = days.map((day) => {
      return {
        icon: day.icon,
        date: formatDateToLongMonth(day.datetime),
        status: day.conditions,
        maxTemp: day.tempmax,
        minTemp: day.tempmin,
      };
    });

    return processedDays.slice(1, dayRange);
  }
}

export default Weather;
