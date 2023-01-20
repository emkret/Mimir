const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector("ul");
const nav = document.querySelector(".nav__container");
const menu_item = document.querySelectorAll(".a__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1000,
  delay: 400,
});

ScrollReveal().reveal(
  ".hero__title,.hero__image,.article__title,.offer_header--h1,.faq__title",
  {
    delay: 700,
    origin: "right",
  }
);

ScrollReveal().reveal(".about__h1", {
  delay: 700,
  origin: "left",
});

ScrollReveal().reveal(".about__h2", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(".article__container", {
  delay: 1000,
  origin: "bottom",
  interval: 300,
});
ScrollReveal().reveal(".plan__div", {
  delay: 1500,
  origin: "right",
  interval: 400,
});
ScrollReveal().reveal(".about__p, .hero__p,.hero__p--new", {
  delay: 900,
  origin: "bottom",
});
ScrollReveal().reveal(".faq__q", {
  delay: 700,
  origin: "right",
  interval: 300,
});
ScrollReveal().reveal(".faq__a", {
  delay: 900,
  origin: "bottom",
  interval: 400,
});
