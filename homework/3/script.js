window.addEventListener("load", () => {
  renderPhoto();
});

async function getRandomPhoto() {
  const apiKey = "TQQ-LuSnVEzB1f5Q9530Dz6s-gqHifvlVotr-A8MfsM";
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${apiKey}`
    );
    const photo = await response.json();
    return photo;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return {};
  }
}

async function renderPhoto() {
  const photo = await getRandomPhoto();
  if (photo) {
    const imageBox = document.querySelector(".photo_box");
    const img = document.createElement("img");
    img.classList.add("image");

    img.src = photo.urls.small;
    img.alt = photo.alt_description;
    imageBox.appendChild(img);

    const imagePhotographerNameDiv =
      document.querySelector(".photographer_name");
    imagePhotographerNameDiv.textContent = `${photo.user.name}`;

    const imageLikesCounterSpan = document.querySelector(".likes_counter");
    imageLikesCounterSpan.textContent = `${photo.likes}`;
  }
}

const counterButton = document.querySelector(".likes_button");
counterButton.addEventListener("click", function () {
  increaseCounter();
});

function increaseCounter() {
  const likesCounter = document.querySelector(".likes_counter");
  const currentCounter = parseInt(likesCounter.textContent, 10);
  likesCounter.textContent = currentCounter + 1;
}
