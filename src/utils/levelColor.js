function getLevelColor(level, max) {
  const relativeLevel = (level / max) * 100;

  if (relativeLevel < 30) {
    return "safe";
  } else if (relativeLevel >= 30 && relativeLevel <= 70) {
    return "moderate";
  } else {
    return "danger";
  }
}

export { getLevelColor };
