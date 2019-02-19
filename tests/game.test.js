const { createGame } = require('../src/game');

describe('Bowling game', () => {
  let game;

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
      for (let i = 0; i < 20; i++) {
        game.roll(0);
      }

      expect(game.score()).toEqual(0);
    });

  });

});
