function formatTimeTo12Hour(time24) {
  const [hour, minutes] = time24.split(":");
  const hourInt = parseInt(hour, 10);

  const period = hourInt >= 12 ? "PM" : "AM";
  const hour12 = hourInt % 12 || 12;

  return `${hour12}:${minutes} ${period}`;
}

function formatDateToLongMonth(dateString) {
  const date = new Date(dateString);
  const options = { month: "long", day: "numeric" };

  return date.toLocaleDateString("en-US", options);
}

export { formatTimeTo12Hour, formatDateToLongMonth };
