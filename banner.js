const slides = document.querySelectorAll('.banner-slide');
let current = 0;

// tiempos (en milisegundos)
const logoTime = 1500;      // logo MUY corto
const socialTime = 8000;   // socialización más largo

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function cycleBanner() {
  showSlide(current);

  const delay = current === 0 ? logoTime : socialTime;

  setTimeout(() => {
    current = (current + 1) % slides.length;
    cycleBanner();
  }, delay);
}

// iniciar
cycleBanner();
