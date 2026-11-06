const images: string[] = [
  "../MEDIA/g1.jpeg",
  "../MEDIA/g2.jpeg",
  "../MEDIA/g3.jpeg",
  "../MEDIA/g4.jpeg"
];

const mainImage = document.getElementById("carousel-image") as HTMLImageElement;

if (!mainImage) throw new Error("Elementul carousel-image nu a fost găsit.");

let currentIndex = 0;

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex]!;
  zoomImage();
}

function zoomImage() {
  mainImage.style.transform = "scale(1.1)";
  setTimeout(() => {
    mainImage.style.transform = "scale(1)";
  }, 500);
}

setInterval(showNextImage, 3000);
