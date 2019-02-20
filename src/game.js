function isStrike(pins, pinIndex) {
  return pins[pinIndex] === 10;
}

function isSpare(frameScore) {
  return frameScore === 10;
}

function calculateFrameScore(pins, pinIndex) {
  return pins[pinIndex] + pins[pinIndex + 1];
}

function strikeBonus(pins, pinIndex) {
  return pins[pinIndex + 1] + pins[pinIndex + 2];
}

function spareBonus(pins, pinIndex) {
  return pins[pinIndex + 2];
}

module.exports.calculateScore = function calculateScore(pins) {
  let score    = 0;
  let pinIndex = 0;

  for (let frame = 0; frame < 10; frame++) {
    if (isStrike(pins, pinIndex)) {
      score += 10 + strikeBonus(pins, pinIndex);
      pinIndex++;
    } else {
      const frameScore = calculateFrameScore(pins, pinIndex);
      score += frameScore;

      if (isSpare(frameScore)) {
        score += spareBonus(pins, pinIndex);
      }

      pinIndex += 2;
    }
  }

  return score;
};
