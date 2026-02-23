document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const bubbles = document.querySelectorAll(".carousel-track .bubble");
  const btnLeft = document.querySelector(".carousel-arrow.left");
  const btnRight = document.querySelector(".carousel-arrow.right");
  const viewport = document.querySelector(".carousel-viewport");

  if (!track || !bubbles.length || !btnLeft || !btnRight || !viewport) return;

  const bubbleWidth = bubbles[0].offsetWidth;
  const gap = 40; // mismo gap del CSS
  const step = bubbleWidth + gap;

  const viewportWidth = viewport.offsetWidth;
  const trackWidth = bubbles.length * step - gap;
  const maxTranslate = trackWidth - viewportWidth;

  let currentTranslate = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentTranslate}px)`;
  }

  btnRight.addEventListener("click", () => {
    const nextTranslate = currentTranslate + step;

    // 👉 AJUSTE CLAVE: no permitir hueco al final
    if (nextTranslate >= maxTranslate) {
      currentTranslate = maxTranslate;
    } else {
      currentTranslate = nextTranslate;
    }

    updateCarousel();
  });

  btnLeft.addEventListener("click", () => {
    const prevTranslate = currentTranslate - step;

    currentTranslate = prevTranslate <= 0 ? 0 : prevTranslate;
    updateCarousel();
  });

  // estado inicial
  track.style.transition = "transform 0.4s ease";
  updateCarousel();
});
