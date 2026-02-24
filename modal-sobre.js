console.log("modal sobre cargado");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM listo - sobre");

  const openDianag = document.getElementById("open-dianag");
  const modalDianag = document.getElementById("modal-dianag");
  const closeDianag = document.getElementById("close-dianag");

  const openJuliethg = document.getElementById("open-juliethg");
  const modalJuliethg = document.getElementById("modal-juliethg");
  const closeJuliethg = document.getElementById("close-juliethg");

  const openDianar = document.getElementById("open-dianar");
  const modalDianar = document.getElementById("modal-dianar");
  const closeDianar = document.getElementById("close-dianar");

  if (!openDianag || !modalDianag || !closeDianag ||
      !openJuliethg || !modalJuliethg || !closeJuliethg ||
      !openDianar || !modalDianar || !closeDianar) {
    console.error("Elementos del modal SOBRE no encontrados");
    return;
  }

  // Diana García
  openDianag.addEventListener("click", function () {
    modalDianag.classList.add("active");
  });
  closeDianag.addEventListener("click", function () {
    modalDianag.classList.remove("active");
  });
  modalDianag.addEventListener("click", function (e) {
    if (e.target === modalDianag) {
      modalDianag.classList.remove("active");
    }
  });

  // Julieth García
  openJuliethg.addEventListener("click", function () {
    modalJuliethg.classList.add("active");
  });
  closeJuliethg.addEventListener("click", function () {
    modalJuliethg.classList.remove("active");
  });
  modalJuliethg.addEventListener("click", function (e) {
    if (e.target === modalJuliethg) {
      modalJuliethg.classList.remove("active");
    }
  });

  // Diana Riveros
  openDianar.addEventListener("click", function () {
    modalDianar.classList.add("active");
  });
  closeDianar.addEventListener("click", function () {
    modalDianar.classList.remove("active");
  });
  modalDianar.addEventListener("click", function (e) {
    if (e.target === modalDianar) {
      modalDianar.classList.remove("active");
    }
  });
});
