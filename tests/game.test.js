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

});
