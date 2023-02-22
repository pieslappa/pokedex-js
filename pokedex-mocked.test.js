const Pokedex = require('./pokedex');

const jestFetchMock = require('jest-fetch-mock');
jestFetchMock.enableMocks();

describe('Pokedex', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('catches multiple pokemon', async () => {
    const mockClient = {
      fetchPokemon: jest
        .fn()
        .mockResolvedValueOnce({
          name: 'pikachu',
          id: 25,
          height: 4,
          weight: 60,
          types: ['electric'],
        })
        .mockResolvedValueOnce({
          name: 'charizard',
          id: 6,
          height: 17,
          weight: 905,
          types: ['fire', 'flying'],
        })
        .mockResolvedValueOnce({
          name: 'jigglypuff',
          id: 9,
          height: 17,
          weight: 905,
          types: ['fluffy'],
        }),
    };
    const pokedex = new Pokedex(mockClient);
    await pokedex.catch('pikachu');
    expect(mockClient.fetchPokemon).toHaveBeenCalledWith('pikachu');
    await pokedex.catch('charizard');
    expect(mockClient.fetchPokemon).toHaveBeenCalledWith('charizard');
    await pokedex.catch('jigglypuff');
    expect(mockClient.fetchPokemon).toHaveBeenCalledWith('jigglypuff');
    const pokemon = pokedex.all();

    expect(pokemon[0].name).toEqual('pikachu');
    expect(pokemon[1].name).toEqual('charizard');
    expect(pokemon[2].name).toEqual('jigglypuff');
    expect(pokemon.length).toBe(3);
  });

  it('catches a pokemon', async () => {
    const mockClient = {
      fetchPokemon: jest.fn().mockResolvedValueOnce({
        name: 'pikachu',
        id: 25,
        height: 4,
        weight: 60,
        types: ['electric'],
      }),
    };
    const pokedex2 = new Pokedex(mockClient);
    await pokedex2.catch('pikachu');
    expect(mockClient.fetchPokemon).toHaveBeenCalledWith('pikachu');
    const poke = pokedex2.all();
    expect(poke[0].name).toEqual('pikachu');
    expect(poke.length).toBe(1);
  });
});
