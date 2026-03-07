const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", function(){
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

/* cerrar menú al tocar una opción */

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});
