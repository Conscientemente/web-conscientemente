document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]').value;
    const correo = form.querySelector('input[type="email"]').value;
    const mensaje = form.querySelector("textarea").value;

    const url =
      "https://docs.google.com/forms/d/e/1FAIpQLScAd6TpzaSGw35-jkLk16rgcMObR_UsxrupcEYzKYWqv7vzsQ/viewform" +
      "?entry.1485635724=" + encodeURIComponent(nombre) +
      "&entry.2061681384=" + encodeURIComponent(correo) +
      "&entry.252278545=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
  });
});
