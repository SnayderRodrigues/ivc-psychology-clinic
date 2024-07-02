document.addEventListener("DOMContentLoaded", function () {
  var contactLoader = document.getElementById("contactPreloader");

  window.addEventListener("load", function () {
    if (contactLoader) {
      contactLoader.classList.add("loaded");
    }
  });
});
