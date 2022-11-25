function getDetail(character) {
  const principalTitle = document.getElementsByClassName("title");
  for (let title of principalTitle) {
    title.style.display = "none";
  }

  const introContainer = document.getElementsByClassName("intro-container");
  for (let intro of introContainer) {
    intro.classList.add("page__container__introduction--disabled");
  }

  const studentsContainer =
    document.getElementsByClassName("students-container");
  for (let students of studentsContainer) {
    students.classList.add("page__container__characters--disabled");
  }

  const staffContainer = document.getElementsByClassName("staff-container");
  for (let staff of staffContainer) {
    staff.classList.add("page__container__characters--disabled");
  }

  const detail = document.getElementsByClassName("detail-container");

  const card = document.createElement("div");
  card.classList.add("page__container__details__card");
  const image = document.createElement("img");
  image.classList.add("page__container__details__card__image");
  image.src = character.image;
  card.appendChild(image);
  const name = document.createElement("h3");
  name.classList.add("page__container__details__card__name");
  name.innerText = character.name;
  card.appendChild(name);
  for (let key in character) {
      const data = document.createElement("p");
      data.classList.add("page__container__details__card__info");
      data.innerText = key + ":" + " " + character[key];
      card.appendChild(data);
  }
  for (let container of detail) {
    container.appendChild(card);
  }
}
export { getDetail };
