document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".service-card");
  const modals = document.querySelectorAll(".services-modal");
  const closes = document.querySelectorAll(".services-modal-close");

  cards.forEach(card => {
    const button = card.querySelector(".service-button");
    const id = card.id.replace("open-", "");
    const modal = document.getElementById("modal-" + id);

    if (button && modal) {
      button.addEventListener("click", function () {
        modal.classList.add("active");
      });
    }
  });

  closes.forEach(close => {
    close.addEventListener("click", function () {
      const modal = close.closest(".services-modal");
      modal.classList.remove("active");
    });
  });

  modals.forEach(modal => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modals.forEach(modal => modal.classList.remove("active"));
    }
  });

});
