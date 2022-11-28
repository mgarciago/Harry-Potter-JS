function getDetail(character) {
  const introContainer = document.getElementsByClassName("intro-container");
  for (let intro of introContainer) {
    intro.classList.add("page__container__introduction--disabled");
  }

  const charactersContainer = document.getElementsByClassName(
    "characters-container"
  );
  for (let character of charactersContainer) {
    character.classList.add("page__container__characters--disabled");
  }

  const detail = document.getElementsByClassName("detail-container");

  const card = document.createElement("div");
  card.classList.add("page__container__details__card");
  const image = document.createElement("img");
  image.classList.add("page__container__details__card__image");
  image.src = character.image;
  card.appendChild(image);
  const principalTitle = document.getElementsByClassName("title");
  for (let title of principalTitle) {
    title.innerText = character.name;
    title.style.fontSize = "340%";
  }

  const dataContainer = document.createElement("div");
  dataContainer.classList.add("page__container__details__card__info-container");
  card.appendChild(dataContainer);

  for (let key in character) {
    const data = document.createElement("p");
    data.classList.add("page__container__details__card__info-container__info");
    switch (key) {
      case ("name", "image"):
        data.innerText = "";
        break;
      case "wand":
        data.innerText =
          key +
          ":" +
          " " +
          character[key].wood +
          "," +
          " " +
          character[key].core +
          "," +
          " " +
          character[key].length;
        break;
      default: {
        data.innerText = key + ":" + " " + character[key];
      }
    }

    dataContainer.appendChild(data);
  }

  for (let container of detail) {
    container.appendChild(card);
    container.classList.remove("page__container__details--disabled");
  }
}
export { getDetail };
