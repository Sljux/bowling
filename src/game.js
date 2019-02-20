module.exports.calculateScore = function calculateScore(pins) {
  let score    = 0;
  let pinIndex = 0;

  for (let frame = 0; frame < 10; frame++) {
    const firstRoll  = pins[pinIndex];
    const secondRoll = pins[pinIndex + 1];

    const frameScore = firstRoll + secondRoll;

    score += frameScore;

    if (frameScore === 10) {
      score += pins[pinIndex + 2];
    }

    pinIndex += 2;
  }

  return score;
};
