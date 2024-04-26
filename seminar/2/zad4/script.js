/* Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность для этого опросника, используя HTML, CSS и JavaScript.

Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен иметь несколько вариантов ответов.
Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все вопросы, и отобразить выбранные им варианты ответов.
Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить на все вопросы перед завершением опроса.
По желанию можно добавить стилизацию опросника с использованием CSS для лучшего пользовательского опыта.*/

"use strict";
const submitBtn = document.querySelector("#submit");
const optionsEls = document.querySelectorAll(".options");
const containerEl = document.querySelector(".container");
const answersEl = document.querySelector(".answers");

submitBtn.addEventListener("click", () => {
  let resultHtml = "";
  optionsEls.forEach((option, index) => {
    const selectedOption = option.querySelector("input:checked");
    if (!selectedOption) {
      option.classList.add("error");
    } else {
      resultHtml += `
                <p>Вопрос ${index + 1}: ${selectedOption.value}</p>
            `;
    }
  });
  if (
    optionsEls.length === containerEl.querySelectorAll("input:checked").length
  ) {
    answersEl.innerHTML = resultHtml;
    document.querySelector(".result").classList.remove("hidden");
  }
});

containerEl.addEventListener("click", ({ target }) => {
  if (target.closest(".options>label")) {
    target.closest(".options").classList.remove("error");
  }
});
