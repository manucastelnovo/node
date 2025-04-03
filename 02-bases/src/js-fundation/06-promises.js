const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/ability/${id}`;

  fetch(url).then((response) => {
    response.json().then((response) => {
      console.log(response.name);
    });
  });
};

module.exports = getPokemonById;
