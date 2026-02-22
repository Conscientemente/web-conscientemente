document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const bubbles = document.querySelectorAll(".carousel-track .bubble");
  const btnPrev = document.querySelector(".carousel-arrow.left");
  const btnNext = document.querySelector(".carousel-arrow.right");

  if (!track || !bubbles.length || !btnPrev || !btnNext) return;

  let index = 0;

  function getStep() {
    const bubble = bubbles[0];
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    return bubble.getBoundingClientRect().width + gap;
  }

  function updateCarousel() {
    const step = getStep();
    track.style.transform = `translateX(${-index * step}px)`;
  }

  const maxIndex = bubbles.length - 2;

  btnNext.addEventListener("click", () => {
    if (index < maxIndex) {
      index++;
      updateCarousel();
    }
  });

  btnPrev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);
});
