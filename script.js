const imageFolder = "photos/";
const imageCount = 10; // ← Change ce chiffre selon le nombre de photos
const slideshow = document.getElementById("slideshow");
let currentIndex = 0;
let slides = [];

function preloadImages() {
  for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement("img");
    img.src = `${imageFolder}${i}.jpg`;
    img.classList.add("slide");
    if (i === 1) img.classList.add("active");
    slideshow.appendChild(img);
    slides.push(img);
  }
}

function startSlideshow() {
  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 5000); // durée entre les photos en millisecondes
}

preloadImages();
startSlideshow();
