const openAnsiedad = document.getElementById("open-ansiedad");
const modalAnsiedad = document.getElementById("modal-ansiedad");
const closeAnsiedad = document.getElementById("close-ansiedad");

openAnsiedad.addEventListener("click", () => {
  modalAnsiedad.classList.add("active");
});

closeAnsiedad.addEventListener("click", () => {
  modalAnsiedad.classList.remove("active");
});
