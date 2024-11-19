function getLevelColor(level, max) {
  const relativeLevel = level / max;

  if (relativeLevel < 20) {
    return "safe";
  } else if (relativeLevel >= 20 && relativeLevel <= 80) {
    return "moderate";
  } else {
    return "danger";
  }
}

export { getLevelColor };
