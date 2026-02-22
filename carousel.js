document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const bubbles = document.querySelectorAll(".carousel-track .bubble");
  const prevBtn = document.querySelector(".carousel-arrow.prev");
  const nextBtn = document.querySelector(".carousel-arrow.next");

  if (!track || !bubbles.length || !prevBtn || !nextBtn) {
    console.warn("Carrusel: elementos no encontrados");
    return;
  }

  const bubbleWidth = bubbles[0].offsetWidth;
  const gap = 40; // debe coincidir con gap del CSS
  const step = bubbleWidth + gap;

  let position = 0;

  const maxPosition = -(step * (bubbles.length - 2));

  nextBtn.addEventListener("click", () => {
    position -= step;
    if (position < maxPosition) {
      position = maxPosition;
    }
    track.style.transform = `translateX(${position}px)`;
  });

  prevBtn.addEventListener("click", () => {
    position += step;
    if (position > 0) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
  });
});
