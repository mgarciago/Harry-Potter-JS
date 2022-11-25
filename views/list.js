import { getCharacters} from "../info.js";
import {getDetail} from "./detail.js"

const allCharacters = await getCharacters();


function paintCharacters () {

  const principalTitle = document.getElementsByClassName("title");
  for (let title of principalTitle) {
    title.innerText = "Characters";
    title.style.display = "block";
  }

  const introContainer = document.getElementsByClassName("intro-container");
  for(let intro of introContainer) {
    intro.classList.add("page__container__introduction--disabled")
  }

  const charactersContainer =
    document.getElementsByClassName("characters-container");

  allCharacters.map((character) => {
    const card = document.createElement("div");
    card.classList.add("page__container__characters__card");
    card.addEventListener("click", () => getDetail(character));
    const image = document.createElement("img");
    image.classList.add("page__container__characters__card__image");
    image.src = character.image;
    card.appendChild(image);
    const name = document.createElement("h5");
    name.classList.add("page__container__characters__card__name");
    name.innerText = character.name;
    card.appendChild(name);
    for (let container of charactersContainer) {
        container.classList.remove("page__container__characters--disabled")
      container.appendChild(card);
    }
  });
}



export { paintCharacters  };

