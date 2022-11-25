const getCharacters = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters")
  const results = await response.json();
  const charactersData = await results;
  let characters = charactersData;
  return characters;
}


export {getCharacters}





