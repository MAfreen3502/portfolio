const heroText = document.querySelector(".hero h1");

heroText.style.opacity = 0;

setTimeout(() => {
  heroText.style.transition = "1s";
  heroText.style.opacity = 1;
}, 500);
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");

images.forEach(img=>{
  img.addEventListener("click", ()=>{
    lightbox.style.display = "flex";
    lightImg.src = img.src;
  });
});

lightbox.addEventListener("click", ()=>{
  lightbox.style.display = "none";
});
// show section when clicking nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".hidden").forEach(sec => {
      sec.classList.add("show");
    });
  });
});
