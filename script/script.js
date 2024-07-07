document.addEventListener("DOMContentLoaded", function () {
  var mainLoader = document.getElementById("mainPreloader");

  window.addEventListener("load", function () {
    if (mainLoader) {
      mainLoader.classList.add("loaded");
    }
  });
});

function show(anything) {
  document.querySelector(".header__menu").value = anything;
}

let menu = document.querySelector(".header__menu");
let items = document.querySelector(".header__list-div");
let links = document.querySelectorAll(".header__link");
let body = document.querySelector("body");

function closeMenu(event) {
  if (!items.contains(event.target) && !menu.contains(event.target)) {
    items.classList.remove("open-menu");
    menu.classList.remove("open-menu");
    body.classList.remove("open-menu");
    document.removeEventListener("click", closeMenu);
  }
}

menu.onclick = function () {
  menu.classList.toggle("open-menu");
  items.classList.toggle("open-menu");
  body.classList.toggle("open-menu");
  items.removeAttribute("style");
  document.addEventListener("click", closeMenu);
};

items.onclick = function (event) {
  event.stopPropagation();
};

links.forEach((link) => {
  link.addEventListener("click", function () {
    items.classList.remove("open-menu");
    menu.classList.remove("open-menu");
    body.classList.remove("open-menu");
  });
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    items.style.transition = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".header");
  var origOffsetY = document.querySelector(".hero").offsetHeight - 200;

  function scroll() {
    if (window.scrollY >= origOffsetY) {
      menu.classList.add("scrolled");
    } else {
      menu.classList.remove("scrolled");
    }
  }

  document.addEventListener("scroll", scroll);
});

const faqs = document.querySelectorAll(".faq__question");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
      }
    });

    faq.classList.toggle("active");
  });
});

document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "Agradecemos seu interesse! No entanto, este é um projeto de estudos e a inscrição não é funcional."
    );
  });
