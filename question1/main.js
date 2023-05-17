"use strict";
/**
 * This function is used to validate a walk represented by a series of directions in an array.
 * The walk is considered valid if it returns to the starting position and takes exactly 10 units of time.
 *
 * @function isValidWalk
 * @param {string[]} walk - An array of strings where each string represents a direction.
 *                          The possible values are "n", "s", "e", "w", which represent north, south, east, and west respectively.
 * @returns {boolean} Returns true if the walk is valid, false otherwise.
 *
 * @example
 *  isValidWalk(["n", "s", "e", "w", "n", "s", "e", "w", "n", "s"]) // returns true
 *  isValidWalk(["n", "n", "n", "s", "e", "w"]) // returns false
 *
 * @note
 *  - Each direction ("n", "s", "e", "w") is assumed to take 1 unit of time.
 *  - The walk starts at a predefined starting position (0,0) on a 2D grid.
 *  - "n" and "s" directions change the vertical position -- "n" increments it and "s" decrements it.
 *  - "w" and "e" directions change the horizontal position -- "w" increments it and "e" decrements it.
 *  - The walk is valid if it ends up at the same position it started and exactly 10 units of time have been used.
 */
exports.__esModule = true;
exports.isValidWalk = void 0;
function isValidWalk(walk) {
    var verticalStartingPosition = 0;
    var horizontalStartingPosition = 0;
    var time = 10;
    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case "n":
                verticalStartingPosition += 1;
                time -= 1;
                break;
            case "s":
                verticalStartingPosition -= 1;
                time -= 1;
                break;
            case "w":
                horizontalStartingPosition += 1;
                time -= 1;
                break;
            case "e":
                horizontalStartingPosition -= 1;
                time -= 1;
                break;
        }
    }
    if (verticalStartingPosition === 0 &&
        horizontalStartingPosition === 0 &&
        time === 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.isValidWalk = isValidWalk;
// A valid walk example
var example1 = isValidWalk([
    "n",
    "s",
    "n",
    "s",
    "n",
    "s",
    "n",
    "s",
    "n",
    "s",
]);
// An invalid walk example
var example2 = isValidWalk(["n", "n", "w", "w", "e", "n", "s"]);
// A valid walk example
var example3 = isValidWalk([
    "n",
    "e",
    "e",
    "e",
    "n",
    "s",
    "w",
    "w",
    "w",
    "s",
]);
console.log(example1); // Expected Value: True
console.log(example2); // Expected Value: False
console.log(example3); // Expected Value: True
