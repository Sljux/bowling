module.exports.calculateScore = function calculateScore(pins) {
  let score    = 0;
  let pinIndex = 0;

  for (let frame = 0; frame < 10; frame++) {
    if (pins[pinIndex] === 10) {
      score += 10 + pins[pinIndex + 1] + pins[pinIndex + 2];
      pinIndex++;
      continue;
    }

    const frameScore = pins[pinIndex] + pins[pinIndex + 1];
    score += frameScore;

    if (frameScore === 10) {
      score += pins[pinIndex + 2];
    }

    pinIndex += 2;
  }

  return score;
};
