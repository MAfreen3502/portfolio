/* ================= HERO TEXT FADE-IN ================= */
console.log("JS loaded");

const heroText = document.querySelector(".hero h1");

if (heroText) {
  heroText.style.opacity = 0;

  setTimeout(() => {
    heroText.style.transition = "opacity 1s ease";
    heroText.style.opacity = 1;
  }, 500);
}

/* ================= SHOW SECTIONS ON LOAD ================= */

window.addEventListener("load", () => {
  document.querySelectorAll(".hidden").forEach(section => {
    section.classList.add("show");
  });
});

/* ================= GALLERY LIGHTBOX ================= */

const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");

if (lightbox && lightImg) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}
