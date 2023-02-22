const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
  it('returns the details for a given pokemon', async () => {
    const pokemon = await fetchPokemon('pikachu');
    expect(pokemon.name).toEqual('pikachu');
  });
});

describe('fetchPokemon', () => {
  it('returns the details for a given pokemon', () => {
    return fetchPokemon('pikachu').then((pokemon) => {
      expect(pokemon.name).toEqual('pikachu');
    });
  });
});
