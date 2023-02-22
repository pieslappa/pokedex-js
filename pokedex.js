const fetchPokemon = require('./api');

class Pokedex {
  constructor(client = null) {
    this.caught = [];
    this.client = client;
  }

  async catch(pokemon) {
    if (this.client !== null) {
      const newPokemon = await this.client.fetchPokemon(pokemon);
      this.caught.push(newPokemon);
    } else {
      const newPokemon = await fetchPokemon(pokemon);
      this.caught.push(newPokemon);
    }
  }

  all() {
    return this.caught;
  }
}

module.exports = Pokedex;
