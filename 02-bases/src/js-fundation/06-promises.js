const { http } = require("./../plugins/http-client.plugin");
const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/ability/${id}`;
  const { data } = await http.get(url);
  return data;
};

module.exports = getPokemonById;
