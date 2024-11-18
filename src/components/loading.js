import "../assets/css/loading.css";

function createLoading() {
  const loading = document.createElement("div");
  loading.className = "loading";

  loading.innerHTML = `
    <div class="loading-container">
        <h3>Searching ...</h3>
        <div class="icon"><i class="fa-solid fa-spinner"></i></div>
    </div>
  `;

  return loading;
}

export default createLoading;
