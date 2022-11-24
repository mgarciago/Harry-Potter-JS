const allStudents = JSON.parse(localStorage.getItem("allStudents"));
const allStaf = JSON.parse(localStorage.getItem("allStaff"));
import {getDetail} from "./detail.js"

function paintStudents() {

  const principalTitle = document.getElementsByClassName("title");
  for (let title of principalTitle) {
    title.innerText = "Students";
  }

  const introContainer = document.getElementsByClassName("intro-container");
  for(let intro of introContainer) {
    intro.classList.add("page__container__introduction--disabled")
  }

  const staffContainer = document.getElementsByClassName("staff-container");
  for(let staff of staffContainer) {
    staff.classList.add("page__container__characters--disabled")
  }

  const studentsContainer =
    document.getElementsByClassName("students-container");

  allStudents.map((student) => {
    const card = document.createElement("div");
    card.classList.add("page__container__characters__card");
    card.addEventListener("click", getDetail);
    const image = document.createElement("img");
    image.classList.add("page__container__characters__card__image");
    image.src = student.image;
    card.appendChild(image);
    const name = document.createElement("h5");
    name.classList.add("page__container__characters__card__name");
    name.innerText = student.name;
    card.appendChild(name);
    for (let container of studentsContainer) {
        container.classList.remove("page__container__characters--disabled")
      container.appendChild(card);
    }
  });
}

function paintStaff() {
  const principalTitle = document.getElementsByClassName("title");
  for (let title of principalTitle) {
    title.innerText = "Staff";
  }

  const introContainer = document.getElementsByClassName("intro-container");
  for(let intro of introContainer) {
    intro.classList.add("page__container__introduction--disabled")
  }

  const studentsContainer = document.getElementsByClassName("students-container")
  for(let students of studentsContainer){
    students.classList.add("page__container__characters--disabled")
  }
  
  const staffContainer = document.getElementsByClassName("staff-container");
  allStaf.map((staff) => {
    const card = document.createElement("div");
    card.classList.add("page__container__characters__card");
    card.addEventListener("click", getDetail);
    const image = document.createElement("img");
    image.classList.add("page__container__characters__card__image");
    image.src = staff.image;
    card.appendChild(image);
    const name = document.createElement("h5");
    name.classList.add("page__container__characters__card__name");
    name.innerText = staff.name;
    card.appendChild(name);
    for(let container of staffContainer){
        container.classList.remove("page__container__characters--disabled")
        container.appendChild(card)
    }
  });
}

export { paintStudents };
export {paintStaff};
