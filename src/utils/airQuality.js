function getMainPollutant(pollutants) {
  const mainPollutant = Object.keys(pollutants).reduce((a, b) =>
    pollutants[a] > pollutants[b] ? a : b,
  );
  const pollutantNames = {
    pm1: "PM 1",
    pm2p5: "PM 2.5",
    pm10: "PM 10",
    o3: "O3",
    no2: "NO2",
    so2: "SO2",
    co: "CO",
  };

  return pollutantNames[mainPollutant];
}

function getAirQualityAssessment(aqi) {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Unhealthy for Sensitive Groups";
  if (aqi <= 200) return "Unhealthy";
  if (aqi <= 300) return "Very Unhealthy";
  return "Hazardous";
}

export { getMainPollutant, getAirQualityAssessment };
