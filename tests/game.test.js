const { calculateScore } = require('../src/game');

describe('Bowling game', () => {
  function multipleSameRolls(rolls, pins) {
    return new Array(rolls).fill(pins);
  }

  test('calculateScore is a function', () => {
    expect(calculateScore).toBeInstanceOf(Function);
  });

  describe('scoring games', () => {

    test('gutter game should be scored 0', () => {
      const pins = multipleSameRolls(20, 0);

      expect(calculateScore(pins)).toEqual(0);
    });

    test('game with 1 pin in each roll', () => {
      const pins = multipleSameRolls(20, 1);

      expect(calculateScore(pins)).toEqual(20);
    });

  });

});
