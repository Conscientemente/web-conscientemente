document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");

  modals.forEach(modal => {
    const id = modal.id.replace("modal-", "");
    const openBtn = document.getElementById(`open-${id}`);
    const closeBtn = document.getElementById(`close-${id}`);

    if (!openBtn || !closeBtn) return;

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
  });
});
