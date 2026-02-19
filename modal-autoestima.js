document.addEventListener("DOMContentLoaded", () => {
  const open = document.getElementById("open-autoestima");
  const modal = document.getElementById("modal-autoestima");
  const close = document.getElementById("close-autoestima");

  if (open && modal && close) {
    open.addEventListener("click", () => {
      modal.classList.add("active");
    });

    close.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
});
