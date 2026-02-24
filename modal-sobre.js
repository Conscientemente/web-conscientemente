// ================= MODAL DIANA GARCÍA =================
const openDianag = document.getElementById("open-dianag");
const modalDianag = document.getElementById("modal-dianag");
const closeDianag = document.getElementById("close-dianag");

openDianag.addEventListener("click", () => {
  modalDianag.classList.add("active");
});

closeDianag.addEventListener("click", () => {
  modalDianag.classList.remove("active");
});

modalDianag.addEventListener("click", (e) => {
  if (e.target === modalDianag) {
    modalDianag.classList.remove("active");
  }
});


// ================= MODAL JULIETH GARCÍA =================
const openJuliethg = document.getElementById("open-juliethg");
const modalJuliethg = document.getElementById("modal-juliethg");
const closeJuliethg = document.getElementById("close-juliethg");

openJuliethg.addEventListener("click", () => {
  modalJuliethg.classList.add("active");
});

closeJuliethg.addEventListener("click", () => {
  modalJuliethg.classList.remove("active");
});

modalJuliethg.addEventListener("click", (e) => {
  if (e.target === modalJuliethg) {
    modalJuliethg.classList.remove("active");
  }
});


// ================= MODAL DIANA RIVEROS =================
const openDianar = document.getElementById("open-dianar");
const modalDianar = document.getElementById("modal-dianar");
const closeDianar = document.getElementById("close-dianar");

openDianar.addEventListener("click", () => {
  modalDianar.classList.add("active");
});

closeDianar.addEventListener("click", () => {
  modalDianar.classList.remove("active");
});

modalDianar.addEventListener("click", (e) => {
  if (e.target === modalDianar) {
    modalDianar.classList.remove("active");
  }
});
