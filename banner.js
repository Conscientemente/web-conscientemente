const slides = document.querySelectorAll('.banner-slide');

let current = 0;

// tiempos en milisegundos
const logoTime = 3000;        // logo: corto
const socialTime = 8000;     // socialización: más largo

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function startBanner() {
  showSlide(0);

  setTimeout(() => {
    current = 1;
    showSlide(current);

    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, socialTime);

  }, logoTime);
}

startBanner();
