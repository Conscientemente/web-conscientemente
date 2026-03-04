document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".carousel-track");

  if (!track) return;

  // duplicar contenido para carrusel infinito
  track.innerHTML += track.innerHTML;

  let scrollAmount = 0;
  const speed = 0.35;

  function autoScroll() {

    scrollAmount += speed;

    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }

    track.scrollLeft = scrollAmount;

    requestAnimationFrame(autoScroll);
  }

  autoScroll();

});
