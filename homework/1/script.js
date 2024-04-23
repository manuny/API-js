"use strict";

const Information = [
  {
    id: 1,
    name: "Йога",
    time: "10:00 - 11:00",
    maxParticipants: 15,
    currentParticipants: 8,
  },
  {
    id: 2,
    name: "Пилатес",
    time: "11:30 - 12:30",
    maxParticipants: 10,
    currentParticipants: 5,
  },
  {
    id: 3,
    name: "Кроссфит",
    time: "13:00 - 14:00",
    maxParticipants: 20,
    currentParticipants: 15,
  },
  {
    id: 4,
    name: "Танцы",
    time: "14:30 - 15:30",
    maxParticipants: 12,
    currentParticipants: 10,
  },
  {
    id: 5,
    name: "Бокс",
    time: "16:00 - 17:00",
    maxParticipants: 8,
    currentParticipants: 6,
  },
];

const localStorageKey = "signUpTraining";
const section = document.querySelector(".section");

Information.forEach((element) => {
  let disabledCancelRec = "disabled";
  let disabledSignUp = "";
  const array = JSON.parse(localStorage.getItem(localStorageKey));
  if (array != null) {
    array.forEach((elem) => {
      if (elem.id === element.id) {
        element.currentParticipants += 1;
        disabledCancelRec = "";
        disabledSignUp = "disabled";
      }
    });
  }

  section.insertAdjacentHTML(
    "afterbegin",
    itemRec(element, disabledSignUp, disabledCancelRec)
  );
});

function itemRec(item, signUp, cancelRec) {
  return `
      <div class="itemTraining">
         <h3>Занятие: ${item.name}</h3>
         <p>Время проведения: ${item.time}</p>
         <p>Максимальное количество мест: ${item.maxParticipants}</p>
         <p class="curParticipants">Текущее количеставо участников: <span class="numbercurParticipants">${item.currentParticipants}</span></p>
         <button ${signUp} onClick="signUp(this, ${item.id})" class="sign-up-button">Записаться</button>
         <button ${cancelRec} onClick="cancelRec(this, ${item.id})" class="cancel-rec-button">Отменить запись</button>
         <br>
         <br>
      </div>
   `;
}

/**Функция записи при нажатии на кнопку "Записаться"*/
function signUp(item, id) {
  const numbercurParticipants = item.parentElement.getElementsByClassName(
    "numbercurParticipants"
  );

  const cancelRecButton =
    item.parentElement.getElementsByClassName("cancel-rec-button");

  numbercurParticipants.item(0).textContent =
    Number(numbercurParticipants.item(0).textContent) + 1;

  cancelRecButton.item(0).disabled = false;

  item.disabled = true;

  saveLocalStorage(id);
}

/**Функция отмены записи при нажатии на кнопку "Отменить запись"*/
function cancelRec(item, id) {
  const numbercurParticipants = item.parentElement.getElementsByClassName(
    "numbercurParticipants"
  );

  const signUpButton =
    item.parentElement.getElementsByClassName("sign-up-button");

  numbercurParticipants.item(0).textContent =
    Number(numbercurParticipants.item(0).textContent) - 1;

  signUpButton.item(0).disabled = false;

  item.disabled = true;

  removeLocalStorage(id);
}
/**Функция записи в localStorage */
function saveLocalStorage(id) {
  let record = localStorage.getItem(localStorageKey);
  if (record === null) {
    record = JSON.stringify([{ id: id }]);
  } else {
    const arr = JSON.parse(record);
    arr.push({ id: id });
    record = JSON.stringify(arr);
  }
  localStorage.setItem(localStorageKey, record);
}

/**Функция удаления из localStorage */
function removeLocalStorage(id) {
  let arr;
  let record = localStorage.getItem(localStorageKey);
  if (record !== null) {
    arr = JSON.parse(record);
    const index = arr.indexOf(arr.find((it) => it.id === id));
    arr.splice(index, 1);
    record = JSON.stringify(arr);
  }
  if (arr.length !== 0) {
    localStorage.setItem(localStorageKey, record);
  } else {
    localStorage.removeItem(localStorageKey);
  }
}
