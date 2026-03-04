document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".carousel-track");

  if (!track) return;

  let scrollAmount = 0;
  const speed = 0.4;

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
