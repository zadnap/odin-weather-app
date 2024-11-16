import "./assets/css/reset.css";
import "./assets/css/variables.css";
import "./assets/css/scrollbar.css";
import "./assets/css/main.css";

import { handleSearch } from "./controllers/appController";
import { locationInformation } from "./utils/storage";
import createSidebar from "./components/sidebar";
import createDashboard from "./components/dashboard";

document.addEventListener("DOMContentLoaded", () => {
  if (locationInformation.get()) {
    handleSearch(locationInformation.get().address);
  }

  const app = document.querySelector("#app");
  const dashboard = createDashboard();
  const sidebar = createSidebar();

  app.appendChild(dashboard);
  app.appendChild(sidebar);
});
