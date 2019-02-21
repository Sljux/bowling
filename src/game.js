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

/**
 * Calculates final score for an American Ten-Pin Bowling game
 * Each game of bowling, includes ten “frames” for the bowler. In each frame, the bowler gets up to two tries to knock
 * down all the pins. If in two tries, she fails to knock them all down, her score for that frame is the total number
 * of pins knocked down in her two tries. If in two tries she knocks them all down, this is called a “spare” and her
 * score for the frame is ten plus the number of pins knocked down on her next throw. If on her first try in the frame
 * she knocks down all the pins, this is called a “strike”. Her turn is over, and her score for the frame is ten plus
 * the simple total of the pins knocked down in her next two rolls. If she gets a spare or strike in the last (tenth)
 * frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of
 * the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only
 * used to calculate the score of the final frame. The game score is the total of all frame scores.
 *
 * @param {number[]} pins - Represents number of pins knocked down in each try
 * @returns {number} Score for a bowling game represented by pins array
 *
 * @example
 *
 *   calculateScore([5, 4, 2, 5, 3, 3, 5, 5, 7, 3, 4, 2, 1, 0, 1, 1, 10, 4, 5])
 */
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
