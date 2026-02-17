console.log("modal ansiedad cargado");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM listo");

  const openAnsiedad = document.getElementById("open-ansiedad");
  const modalAnsiedad = document.getElementById("modal-ansiedad");
  const closeAnsiedad = document.getElementById("close-ansiedad");

  console.log(openAnsiedad, modalAnsiedad, closeAnsiedad);

  if (!openAnsiedad || !modalAnsiedad || !closeAnsiedad) {
    console.error("Elementos del modal NO encontrados");
    return;
  }

  openAnsiedad.addEventListener("click", function () {
    modalAnsiedad.classList.add("active");
  });

  closeAnsiedad.addEventListener("click", function () {
    modalAnsiedad.classList.remove("active");
  });

  modalAnsiedad.addEventListener("click", function (e) {
    if (e.target === modalAnsiedad) {
      modalAnsiedad.classList.remove("active");
    }
  });
});

