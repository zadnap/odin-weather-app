function degreeToDirection(degree) {
  const directions = [
    "North",
    "North East",
    "East",
    "South East",
    "South",
    "South West",
    "West",
    "North West",
  ];
  const index = Math.round(degree / 45) % 8;
  return directions[index];
}

export { degreeToDirection };
