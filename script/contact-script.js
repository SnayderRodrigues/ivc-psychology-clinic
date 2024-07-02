document.addEventListener("DOMContentLoaded", function () {
  var contactLoader = document.getElementById("contactPreloader");

  window.addEventListener("load", function () {
    if (contactLoader) {
      contactLoader.classList.add("loaded");
    }
  });
});

document
  .getElementById("contactNewsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "Agradecemos seu interesse! No entanto, este é um projeto de estudos e a inscrição não é funcional."
    );
  });