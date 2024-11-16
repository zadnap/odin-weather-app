import "../assets/css/dashboard.css";

function createDashboard() {
  const dashboard = document.createElement("section");
  dashboard.className = "dashboard";

  dashboard.innerHTML = "";

  return dashboard;
}

export default createDashboard;
