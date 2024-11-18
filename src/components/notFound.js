import "../assets/css/notFound.css";

import { renderUI } from "../controllers/domController";

function createNotFound() {
  const notFound = document.createElement("div");
  notFound.className = "not-found";

  notFound.innerHTML = `
    <div class="not-found-container">
        <h3>Location not found</h3>
        <div class="icon"><i class="fa-solid fa-ban"></i></div>
        <button class="close">Close</button>
    </div>
  `;

  notFound.querySelector(".close").addEventListener("click", renderUI);

  return notFound;
}

export default createNotFound;
