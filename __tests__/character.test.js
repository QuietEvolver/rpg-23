import Character from '../src/js/character.js';

describe('Character', () => {

  test('should correctly create a character object with a health property', () => {
    const character = new Character(12);
    expect(character.health).toEqual(12);
  });

  test('should add 1 to health score', () => {
    const character = new Character(12);
    expect(character.healthPlusOne()).toEqual(13);
  });

  test("should return 0 if health score is 0", () => {
    const character = new Character(0);
    expect(character.healthPlusOne()).toEqual(0);
  });

  test('should minus 1 to health score', () => {
    const character = new Character(12);
    expect(character.healthMinusOne()).toEqual(11);
  });

  test("should return 0 if health score is 0", () => {
    const character = new Character(0);
    expect(character.healthMinusOne()).toEqual(0);
  });

  test("should return 24 health if using a shield", () => {
  const character = new Character(1);
  expect(character.equipShield()).toEqual(25);
  });

  test("should return 0 if health score is 0", () => {
    const character = new Character(0);
    expect(character.equipShield()).toEqual(0);
  });

  test("should add character class to character object", () => {
    const character = new Character(0, "wizard");
    expect(character.takeClass()).toEqual("wizard");
  });

});