document.addEventListener("DOMContentLoaded", () => {
  const pairs = [
    ["ansiedad", "ansiedad"],
    ["fobiasocial", "fobiasocial"],
    ["autoestima", "autoestima"],
    ["depresion", "depresion"]
  ];

  pairs.forEach(([key]) => {
    const open = document.getElementById(`open-${key}`);
    const modal = document.getElementById(`modal-${key}`);
    const close = document.getElementById(`close-${key}`);

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
});
