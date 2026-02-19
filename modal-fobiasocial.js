document.addEventListener("DOMContentLoaded", () => {
  const open = document.getElementById("open-fobiasocial");
  const modal = document.getElementById("modal-fobiasocial");
  const close = document.getElementById("close-fobiasocial");

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
