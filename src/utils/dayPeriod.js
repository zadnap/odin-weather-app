function analyzePeriodWeather(data) {
  // Define parts of the day based on indices
  const dayParts = {
    morning: { range: [6, 11], temps: [], icons: [] },
    afternoon: { range: [12, 17], temps: [], icons: [] },
    evening: { range: [18, 23], temps: [], icons: [] },
    night: { range: [0, 5], temps: [], icons: [] },
  };

  // Classify data into parts of the day
  data.forEach((item, index) => {
    for (const part in dayParts) {
      const [start, end] = dayParts[part].range;
      if (index >= start && index <= end) {
        dayParts[part].temps.push(item.temp);
        dayParts[part].icons.push(item.icon);
        break;
      }
    }
  });

  // Calculate results for each part of the day
  const result = {};
  for (const part in dayParts) {
    const temps = dayParts[part].temps;
    const icons = dayParts[part].icons;

    // Calculate average temperature
    const avgTemp = temps.reduce((sum, t) => sum + t, 0) / temps.length;

    // Find the most frequent icon
    const iconCounts = icons.reduce((counts, icon) => {
      counts[icon] = (counts[icon] || 0) + 1;
      return counts;
    }, {});
    const generalIcon = Object.keys(iconCounts).reduce((a, b) =>
      iconCounts[a] > iconCounts[b] ? a : b,
    );

    // Add results to the output
    result[part] = {
      temp: Math.round(avgTemp),
      icon: generalIcon,
    };
  }

  return result;
}

export { analyzePeriodWeather };
