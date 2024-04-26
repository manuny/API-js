"use strict";
// Получаем элементы слайдера
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

// Функция для показа предыдущего слайда
prevButton.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
});
// Функция для показа следующего слайда
nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
});

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// Инициализация слайдера
updateSlider();
