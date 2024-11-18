import createDashboard from "../components/dashboard";
import createLoading from "../components/loading";
import createSidebar from "../components/sidebar";
import createNotFound from "../components/notFound";

const app = document.querySelector("#app");

function renderDashboard() {
  const dashboard = createDashboard();
  app.prepend(dashboard);
}

function renderSidebar() {
  const sidebar = createSidebar();
  app.append(sidebar);
}

function renderLoading() {
  const loading = createLoading();
  app.appendChild(loading);
}

function renderNotFound() {
  const notFound = createNotFound();
  app.appendChild(notFound);
}

function renderUI() {
  app.innerHTML = "";
  renderDashboard();
  renderSidebar();
}

export { renderUI, renderLoading, renderNotFound };
