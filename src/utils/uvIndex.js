function getUVLevel(uvIndex) {
  if (uvIndex < 0) {
    return "Invalid UV index";
  } else if (uvIndex <= 2) {
    return "Low";
  } else if (uvIndex <= 5) {
    return "Moderate";
  } else if (uvIndex <= 7) {
    return "High";
  } else if (uvIndex <= 10) {
    return "Very High";
  } else {
    return "Extreme";
  }
}

export { getUVLevel };
