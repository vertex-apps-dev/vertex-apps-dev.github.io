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
