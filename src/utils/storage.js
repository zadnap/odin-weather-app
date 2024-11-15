const createStorageHandler = (key) => ({
  get: () => JSON.parse(localStorage.getItem(key)),
  set: (value) => localStorage.setItem(key, JSON.stringify(value)),
});

export const locationInformation = createStorageHandler("locationInformation");
export const todayConditions = createStorageHandler("todayConditions");
export const sunTransition = createStorageHandler("sunTransition");
export const airQuality = createStorageHandler("airQuality");
export const uvIndex = createStorageHandler("uvIndex");
export const periodTemperature = createStorageHandler("periodTemperature");
export const forecast = createStorageHandler("forecast");
