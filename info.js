const charactersCall = () => {
  fetch("https://hp-api.herokuapp.com/api/characters")
    .then((response) => {
      return response.json();
    })
    .then((myCharacters) => {
      const allCharacters = myCharacters;
      console.log(allCharacters)
    })
    .catch((error) => {
      alert("Can not get this information", error);
    });
};

const spellsCall = () => {
  fetch("https://hp-api.herokuapp.com/api/spells")
    .then((response) => {
      return response.json();
    })
    .then((mySpells) => {
      const allSpells = mySpells;
      console.log(allSpells)
    })
    .catch((error) => {
      alert("Can not get this information", error);
    });
};

export {charactersCall, spellsCall};
