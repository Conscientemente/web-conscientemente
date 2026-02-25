document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]').value;
    const correo = form.querySelector('input[type="email"]').value;
    const mensaje = form.querySelector("textarea").value;

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScAd6TpzaSGw35-jkLk16rgcMObR_UsxrupcEYzKYWqv7vzsQ/formResponse";

    const data = new FormData();
    data.append("entry.1485635724", nombre);
    data.append("entry.2061681384", correo);
    data.append("entry.252278545", mensaje);

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: data
    });

    form.reset();
    alert("Tu mensaje fue enviado correctamente. Te responderemos pronto.");
  });
});
