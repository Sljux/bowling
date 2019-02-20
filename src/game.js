module.exports.calculateScore = function calculateScore(pins) {
  return pins.reduce((sum, num) => sum + num, 0);
};
