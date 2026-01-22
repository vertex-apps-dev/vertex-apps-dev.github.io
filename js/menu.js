document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");

  header.innerHTML = `
    <div class="header-left">
      <img src="images/logo.png" alt="Vertex Apps ロゴ" class="site-logo">
      <span class="logo-text">Vertex Apps</span>
    </div>
    <nav class="nav">
      <a href="index.html">トップ</a>
      <a href="service.html">事業内容</a>
      <a href="about.html">事業者情報</a>
      <a href="contact.html">お問い合わせ</a>
    </nav>
  `;
});

/* ===== Disney-style Loading ===== */

let progress = 0;
const text = document.getElementById("loading-text");
const bar = document.getElementById("loading-progress");

const fakeLoading = setInterval(() => {
  if (progress < 90) {
    progress += Math.floor(Math.random() * 5) + 1;
    if (progress > 90) progress = 90;
    bar.style.width = progress + "%";
    text.textContent = `Loading... ${progress}%`;
  }
}, 300);

window.addEventListener("load", () => {
  clearInterval(fakeLoading);
  bar.style.width = "100%";
  text.textContent = "Loading... 100%";

  setTimeout(() => {
    document.getElementById("loading").classList.add("loaded");
  }, 400);
});
