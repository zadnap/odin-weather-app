function computeDayPeriodTemperatures(hourlyTemperatures) {
  const average = (temps) =>
    Math.floor(temps.reduce((sum, temp) => sum + temp, 0) / temps.length);

  const morning = average(hourlyTemperatures.slice(6, 12));
  const afternoon = average(hourlyTemperatures.slice(12, 18));
  const evening = average(hourlyTemperatures.slice(18, 24));
  const night = average([...hourlyTemperatures.slice(0, 6)]);

  return { morning, afternoon, evening, night };
}

export { computeDayPeriodTemperatures };
