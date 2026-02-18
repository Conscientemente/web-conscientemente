document.addEventListener("DOMContentLoaded", () => {
  const openDepresion = document.getElementById("open-depresion");
  const modalDepresion = document.getElementById("modal-depresion");
  const closeDepresion = document.getElementById("close-depresion");

  if (openDepresion && modalDepresion && closeDepresion) {
    openDepresion.addEventListener("click", () => {
      modalDepresion.classList.add("active");
    });

    closeDepresion.addEventListener("click", () => {
      modalDepresion.classList.remove("active");
    });

    modalDepresion.addEventListener("click", (e) => {
      if (e.target === modalDepresion) {
        modalDepresion.classList.remove("active");
      }
    });
  }
});
