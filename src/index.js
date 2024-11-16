import "./assets/css/reset.css";
import "./assets/css/variables.css";
import "./assets/css/main.css";

import { handleSearch } from "./controllers/appController";
import { locationInformation } from "./utils/storage";

document.addEventListener("DOMContentLoaded", () => {
  if (locationInformation.get()) {
    handleSearch(locationInformation.get().address);
  }
});
