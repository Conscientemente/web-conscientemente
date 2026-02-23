document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const bubbles = document.querySelectorAll(".carousel-track .bubble");
  const btnLeft = document.querySelector(".carousel-arrow.left");
  const btnRight = document.querySelector(".carousel-arrow.right");

  if (!track || bubbles.length === 0 || !btnLeft || !btnRight) return;

  const bubbleWidth = bubbles[0].offsetWidth;
  const gap = 40; // espacio entre burbujas (coherente con bubbles.css)
  const step = bubbleWidth + gap;

  let currentIndex = 0;

  function updateCarousel() {
    const translateX = -(currentIndex * step);
    track.style.transform = `translateX(${translateX}px)`;
  }

  btnRight.addEventListener("click", () => {
    const maxIndex = bubbles.length - 2; // deja burbuja parcial visible
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  btnLeft.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Estado inicial
  track.style.transition = "transform 0.4s ease";
  updateCarousel();
});
