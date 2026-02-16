const slides = document.querySelectorAll('.banner-slide');
let current = 0;

// tiempos (ms)
const logoTime = 2200;      // logo: 2.2 segundos
const socialTime = 8000;   // socialización: lectura tranquila

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

// iniciar ciclo
cycleBanner();
/* ===============================
   MODAL ANSIEDAD
   =============================== */

function openAnsiedad() {
  document.getElementById('modal-ansiedad').classList.add('active');
}

function closeAnsiedad() {
  document.getElementById('modal-ansiedad').classList.remove('active');
}
