const Pokedex = require('./pokedex');

require('./pokedex');

describe('Pokedex', () => {
  it('adds a pokemon to the pokedex', async () => {
    const pokedex = new Pokedex();
    await pokedex.catch('pikachu');
    const pokemon = pokedex.all();
    expect(pokemon[0].name).toEqual('pikachu');
  });

  it('displays all the pokemon in the pokedex', async () => {
    const pokedex = new Pokedex();
    await pokedex.catch('pikachu');
    await pokedex.catch('charizard');
    const pokemon = pokedex.all();
    expect(pokemon.length).toBe(2);
  });
});
