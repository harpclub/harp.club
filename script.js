/* ==============================
   ハンバーガーメニュー制御
============================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

/* メニュー開閉 */
if (hamburger && navMenu && overlay) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    overlay.classList.toggle("show");
  });

  /* overlayクリックで閉じる */
  overlay.addEventListener("click", () => {
    navMenu.classList.remove("show");
    overlay.classList.remove("show");
  });

  /* メニュークリックで閉じる */
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      overlay.classList.remove("show");
    });
  });
}

/* ==============================
   QA iframe高さ自動調整
============================== */

window.addEventListener("message", (event) => {
  if (event.data && event.data.type === "qaHeight") {
    const iframe = document.querySelector(".qa-frame");

    if (iframe) {
      iframe.style.height = event.data.height + "px";
    }
  }
});
