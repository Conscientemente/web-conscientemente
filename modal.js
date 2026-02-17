const openBtn = document.getElementById('open-ansiedad');
const modal = document.getElementById('modal-ansiedad');
const closeBtn = document.getElementById('close-ansiedad');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
