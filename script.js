const images = [
  "1000013732.jpg",
  "1000013735.jpg",
  "1000013738.jpg",
  "1000013741.jpg",
  "1000013744.jpg",
  "1000013747.jpg",
  "1000013750.jpg",
  "1000013753.jpg",
  "1000013756.jpg",
  "IMG_20250504_153323.jpg"
];

let currentIndex = 0;

function showImage() {
  const img = document.getElementById("slideshow");
  img.src = "photo/" + images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

setInterval(nextImage, 3000); // change d’image toutes les 3 sec
window.onload = showImage;
