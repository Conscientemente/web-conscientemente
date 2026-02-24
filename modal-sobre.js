document.addEventListener("DOMContentLoaded", () => {

  function setupModal(openId, modalId, closeId) {
    const openBtn = document.getElementById(openId);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeId);

    openBtn.addEventListener("click", () => {
      modal.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  setupModal("open-diana-garcia", "modal-diana-garcia", "close-diana-garcia");
  setupModal("open-diana-riveros", "modal-diana-riveros", "close-diana-riveros");
  setupModal("open-julieth-garcia", "modal-julieth-garcia", "close-julieth-garcia");

});

 
