const slides = document.querySelectorAll('.banner-slide');
let current = 0;

const logoTime = 2200;
const socialTime = 8000;

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

cycleBanner();
