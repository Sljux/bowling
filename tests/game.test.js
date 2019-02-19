const { createGame } = require('../src/game');

describe('Bowling game', () => {
  let game;

  function makeMultipleSameRolls(rolls, pins) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }

  beforeEach(() => {
    game = createGame();
    expect(game).toBeDefined();
  });

  test('has score method', () => {
    expect(game.score).toBeDefined();
    expect(game.score).toBeInstanceOf(Function);
  });

  test('has roll method', () => {
    expect(game.roll).toBeDefined();
    expect(game.roll).toBeInstanceOf(Function);
  });

  describe('scoring games', () => {

    test('gutter game should be scored 0', () => {
      makeMultipleSameRolls(20, 0);

      expect(game.score()).toEqual(0);
    });

    test('game with 1 pin in each roll', () => {
      makeMultipleSameRolls(20, 1);

      expect(game.score()).toEqual(20);
    });

  });

});
