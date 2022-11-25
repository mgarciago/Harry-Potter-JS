import { paintCharacters } from "../views/list.js";


function backHome() {
  const principalTitle = document.getElementsByClassName("title");
  for (let title of principalTitle) {
    title.style.display = "block";
    title.innerText = "Platform 9¾";
  }

  const charactersContainer =
    document.getElementsByClassName("characters-container");
  for (let character of charactersContainer) {
    character.classList.add("page__container__characters--disabled");
  }

  const detailsContainer = document.getElementsByClassName("detail-container");
  for (let details of detailsContainer) {
    details.classList.add("page__container__details--disabled");
  }

  const introContainer = document.getElementsByClassName("intro-container");
  for (let intro of introContainer) {
    intro.classList.remove("page__container__introduction--disabled");
  }
}

const logoImage = document.getElementsByClassName("logo");
for (let logo of logoImage) {
  logo.addEventListener("click", backHome);
}

const navCharacters = document.getElementsByClassName("characters");
for (let button of navCharacters) {
  button.addEventListener("click", paintCharacters);
}


scroll({
  top: offsetTop,
  behavior: "smooth",
});
