function getTimeOfDay(now) {
  const hour = new Date(now).getHours();

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

function calculateDayProgress(sunrise, sunset, currentTime) {
  const now = new Date(currentTime);

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

  const sunriseTime = parseTime(sunrise, now);
  const sunsetTime = parseTime(sunset, now);

  const totalDaylight = sunsetTime - sunriseTime;
  const elapsedTime = now - sunriseTime;

  const percentage = (elapsedTime / totalDaylight) * 100;

  return Math.min(Math.max(percentage, 0), 100).toFixed(2);
}

function getCurrentDateInTimezone(timezone) {
  try {
    const nowInTimezone = new Date().toLocaleString("en-US", {
      timeZone: timezone,
    });

    const dateInTimezone = new Date(nowInTimezone);

    if (isNaN(dateInTimezone.getTime())) {
      throw new Error("Invalid timezone or failed to parse date");
    }

    return dateInTimezone;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

export { getTimeOfDay, calculateDayProgress, getCurrentDateInTimezone };
