import Character from '../src/js/character.js';

describe('Character', () => {

  test('should correctly create a object object with three properties', () => {
    const character = new Character(12);

    expect(character.health).toEqual(12);
  });

  
});