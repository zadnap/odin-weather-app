import { getAirQualityAssessment, getMainPollutant } from "./airQuality";
import { formatDateToLongMonth, formatTimeTo12Hour } from "./date";
import { analyzePeriodWeather } from "./dayPeriod";
import { degreeToDirection } from "./direction";
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
    const url = `${Weather.BASE_URL}/timeline/${location}?unitGroup=metric&elements=%2Baqius,%2Bpm2p5,%2Bpm1,%2Bpm10,%2Bo3,%2Bno2,%2Bso2,%2Bco&key=${Weather.API_KEY}`;

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

  getTodayAirQuality() {
    const { co, so2, no2, o3, pm10, pm1, pm2p5, aqius, winddir } =
      this.#weatherTimeline.currentConditions;

    return {
      aqius,
      windDirection: degreeToDirection(winddir),
      mainPollutant: getMainPollutant({ co, so2, no2, o3, pm10, pm1, pm2p5 }),
      assessment: getAirQualityAssessment(aqius),
    };
  }

  getTodayUVIndex() {
    const { uvindex } = this.#weatherTimeline.currentConditions;

    return {
      index: uvindex,
      level: getUVLevel(uvindex),
    };
  }

  getTodayPeriodTemperatures() {
    const todayHourlyTemperature = this.#weatherTimeline.days[0].hours.map(
      (hour) => {
        return { temp: hour.temp, icon: hour.icon };
      },
    );

    return analyzePeriodWeather(todayHourlyTemperature);
  }

  getForecast() {
    const { days } = this.#weatherTimeline;
    const processedDays = days.map((day) => {
      return {
        icon: day.icon,
        date: formatDateToLongMonth(day.datetime),
        status: day.conditions,
        maxTemp: Math.round(day.tempmax),
        minTemp: Math.round(day.tempmin),
      };
    });

    return processedDays.slice(1, processedDays.length);
  }
}

export default Weather;
