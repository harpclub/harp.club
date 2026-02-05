const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

/* ハンバーガーメニュー */
hamburger?.addEventListener("click", () => {
  navMenu.classList.toggle("show");   // ← CSSと一致
  overlay.classList.toggle("show");
});

/* オーバーレイクリックで閉じる */
overlay?.addEventListener("click", () => {
  navMenu.classList.remove("show");
  overlay.classList.remove("show");
});

/* =================================
   Q&A iframe 高さ自動調整（必須）
================================= */
window.addEventListener("message", (event) => {
  if (event.data && event.data.type === "qaHeight") {
    const iframe = document.querySelector(".qa-frame");
    if (iframe) {
      iframe.style.height = event.data.height + "px";
    }
  }
});
