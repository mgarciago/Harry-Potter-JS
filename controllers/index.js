import { paintStudents } from "../views/list.js";
import { paintStaff } from "../views/list.js";

function backHome() {
  const principalTitle = document.getElementsByClassName("title");
  for (let title of principalTitle) {
    title.style.display = "block";
    title.innerText = "Platform 9¾";
  }

  const staffContainer = document.getElementsByClassName("staff-container");
  for (let staff of staffContainer) {
    staff.classList.add("page__container__characters--disabled");
  }

  const studentsContainer =
    document.getElementsByClassName("students-container");
  for (let students of studentsContainer) {
    students.classList.add("page__container__characters--disabled");
  }

  const detailsContainer = document.getElementsByClassName("detail-container");
  for(let details of detailsContainer){
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

const navStudents = document.getElementsByClassName("students");
for (let button of navStudents) {
  button.addEventListener("click", paintStudents);
}

const navStaff = document.getElementsByClassName("staff");
for (let button of navStaff) {
  button.addEventListener("click", paintStaff);
}
