## Bowling Game

A program that calculates final score for an American Ten-Pin Bowling game:

* Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
* In each frame, the bowler gets up to two tries to knock down all the pins.
* If in two tries, she fails to knock them all down, her score for that frame is the total number of pins knocked down in her two tries.
* If in two tries she knocks them all down, this is called a “spare” and her score for the frame is ten plus the number of pins knocked down on her next throw (in his next turn).
* If on her first try in the frame she knocks down all the pins, this is called a “strike”. Her turn is over, and her score for the frame is ten plus the simple total of the pins knocked down in her next two rolls.
* If she gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn.
* If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
* The game score is the total of all frame scores.

```js
calculateScore(new Array(20).fill(0));
// returns 0

calculateScore([5, 4, 2, 5, 3, 3, 5, 5, 7, 3, 4, 2, 1, 0, 1, 1, 10, 4, 5]);
// returns 90

calculateScore(new Array(21).fill(10));
// returns 300
```

This version of `calculateScore` function expects a valid array of rolls (does not validate
for correct number of frames and rolls or valid rolls).

Run `npm test` to run unit tests with code coverage.

For development, run `npm run test:watch` to run unit tests an every file change.
