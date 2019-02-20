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

    test('game with 1 spare', () => {
      const pins = [7, 3, 5, ...multipleSameRolls(17, 0)];

      expect(calculateScore(pins)).toEqual(20);
    });

    test('game with 2 consecutive spares', () => {
      const pins = [7, 3, 6, 4, 3, ...multipleSameRolls(15, 0)];

      expect(calculateScore(pins)).toEqual(32);
    });

    test('game with 1 strike', () => {
      const pins = [10, 5, 6, ...multipleSameRolls(16, 0)];

      expect(calculateScore(pins)).toEqual(32);
    });

    test('game with 2 consecutive strikes', () => {
      const pins = [10, 10, 2, ...multipleSameRolls(16, 0)];

      expect(calculateScore(pins)).toEqual(36);
    });

    test('perfect game', () => {
      const pins = multipleSameRolls(21, 10);

      expect(calculateScore(pins)).toEqual(300);
    });

  });

});
