const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const header = document.querySelector(".site-header");

menuToggle.addEventListener("click", function(){
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");
  header.classList.toggle("menu-open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("open");
    header.classList.remove("menu-open");
  });
});
