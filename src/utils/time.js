function getTimeOfDay() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 17) {
    return "afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "evening";
  } else {
    return "night";
  }
}

function calculateDayProgress(sunrise, sunset, currentTime = new Date()) {
  function parseTime(timeStr, referenceDate) {
    const [time, meridian] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let parsedHours = hours % 12;
    if (meridian === "PM") {
      parsedHours += 12;
    }
    const date = new Date(referenceDate);
    date.setHours(parsedHours, minutes, 0, 0);
    return date;
  }

  const sunriseTime = parseTime(sunrise, currentTime);
  const sunsetTime = parseTime(sunset, currentTime);

  const totalDaylight = sunsetTime - sunriseTime;
  const elapsedTime = currentTime - sunriseTime;

  const percentage = (elapsedTime / totalDaylight) * 100;

  return Math.min(Math.max(percentage, 0), 100).toFixed(2);
}

export { getTimeOfDay, calculateDayProgress };
