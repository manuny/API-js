"use strict";

const menuEl = document.querySelector(".menu");

menuEl.addEventListener("click", ({ target }) => {
  if (target.closest(".menu_link")) {
    // const menuEls = document.querySelectorAll('.menu_link');
    document.querySelectorAll(".menu_link").forEach((element) => {
      element.classList.remove("active");
    });

    target.classList.add("active");
  }
});
