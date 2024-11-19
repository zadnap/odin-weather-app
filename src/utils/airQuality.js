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
  if (aqi <= 50) return { level: 0, status: "Good" };
  if (aqi <= 100) return { level: 1, status: "Moderate" };
  if (aqi <= 150) return { level: 2, status: "Unhealthy for Sensitive Groups" };
  if (aqi <= 200) return { level: 3, status: "Unhealthy" };
  if (aqi <= 300) return { level: 4, status: "Very Unhealthy" };
  return { level: 5, status: "Hazardous" };
}

export { getMainPollutant, getAirQualityAssessment };
