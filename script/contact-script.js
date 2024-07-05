document.addEventListener("DOMContentLoaded", function () {
  var contactLoader = document.getElementById("contactPreloader");

  window.addEventListener("load", function () {
    if (contactLoader) {
      contactLoader.classList.add("loaded");
    }
  });
});


function show(anything) {
  document.querySelector(".contactHeader__menu").value = anything;
}

let menu = document.querySelector(".contactHeader__menu");
let items = document.querySelector(".contactHeader__list-div");
let links = document.querySelectorAll(".contactHeader__link");
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

document
  .getElementById("contactNewsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "Agradecemos seu interesse! No entanto, este é um projeto de estudos e a inscrição não é funcional."
    );
  });