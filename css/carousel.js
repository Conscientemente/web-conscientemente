document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const bubbles = document.querySelectorAll(".carousel-track .bubble");
  const btnPrev = document.querySelector(".carousel-arrow.left");
  const btnNext = document.querySelector(".carousel-arrow.right");

  if (!track || bubbles.length === 0 || !btnPrev || !btnNext) return;

  let index = 0;

  const bubbleWidth = bubbles[0].offsetWidth;
  const gap = parseInt(getComputedStyle(track).gap) || 0;
  const step = bubbleWidth + gap;

  const maxIndex = bubbles.length - 2;

  function updateCarousel() {
    track.style.transform = `translateX(${-index * step}px)`;
  }

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
});
