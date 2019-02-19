class BowlingGame {
  constructor() {
    this.points = 0;
  }

  roll(pins) {
    this.points += pins;
  }

  score() {
    return this.points;
  }
}

module.exports.createGame = function createGame() {
  return new BowlingGame();
};
