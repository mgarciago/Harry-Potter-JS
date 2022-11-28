import { paintCharacters } from "../views/list.js";


const introContainer = document.getElementsByClassName("intro-container");
  for (let intro of introContainer) {
    const welcomeMessage = setTimeout(() => {
      const message = document.createElement("h2");
      message.classList.add("page__container__introduction__message")
      message.innerText = "Welcome to the ultimate Harry Potter webpage!";
      intro.appendChild(message);
    }, 2000);

    setTimeout(() => {
      clearTimeout(welcomeMessage);
      const message = document.getElementsByClassName("page__container__introduction__message");
      for(let mes of message){
        mes.classList.add("page__container__introduction__message--disabled")
      }

      const explanationHome = document.getElementsByClassName("page__container__introduction__explanation");
      for(let explanation of explanationHome){
        explanation.classList.remove("page__container__introduction__explanation--disabled")
      }
    }, 6000);
  }


function backHome(clicked) {
  let lastClicked = "";
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

  if(lastClicked === clicked){
    const introContainer = document.getElementsByClassName("intro-container");
    for (let intro of introContainer) {
     const infoMessage = document.createElement("h2");
     infoMessage.classList.add("page__container__introduction__message")
     infoMessage.innerText = "You are already here!"
     intro.appendChild(infoMessage);
    }
  }
  lastClicked = clicked;

}


const logoImage = document.getElementsByClassName("logo");
for (let logo of logoImage) {
  logo.addEventListener("click", () => backHome("clicked"));
}

const navHome = document.getElementsByClassName("home");
for(let home of navHome) {
  home.addEventListener("click", () => backHome("clicked"))
}

const navCharacters = document.getElementsByClassName("characters");
for (let button of navCharacters) {
  button.addEventListener("click", paintCharacters);
}


