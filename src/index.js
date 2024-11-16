import "./assets/css/main.css";

import { handleSearch } from "./controllers/appController";
import { locationInformation } from "./utils/storage";

if (locationInformation.get()) {
  handleSearch(locationInformation.get().address);
}
