"use strict";
/**
 * findOutlier - This function accepts an array of integers, which is guaranteed
 * to be either entirely comprised of odd integers or entirely comprised of even
 * integers except for a single integer N. This function returns the "outlier" N.
 *
 * @param integers: number[] - The input array of integers.
 *
 * The function uses a straightforward approach to solve the problem:
 * 1. It initializes two empty arrays, evens and odds, to store even and odd numbers.
 * 2. It iterates over the input array, and for each number, checks if it's even or odd.
 * 3. If the number is even, it is added to the evens array, otherwise it is added to the odds array.
 * 4. After all numbers are processed, it checks which array, evens or odds, has exactly one element.
 * 5. It then returns that single element as the outlier.
 *
 * Assumptions and Constraints:
 * - The input array, integers, will always have at least 3 elements.
 * - The input array will always contain at least one odd and one even number.
 * - The outlier is guaranteed to be present in the array.
 *
 * @returns {number} - The outlier in the array.
 *
 * Usage:
 *  const outlier = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
 *  console.log(outlier); // Outputs: 11
 */
exports.__esModule = true;
exports.findOutlier = void 0;
function findOutlier(integers) {
    var evenNumbers = [];
    var oddNumbers = [];
    for (var i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenNumbers.push(integers[i]);
        }
        else if (integers[i] % 2 !== 0) {
            oddNumbers.push(integers[i]);
        }
    }
    return evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0];
}
exports.findOutlier = findOutlier;
// An example that has an odd outlier
var oddExample = findOutlier([4, 6, 10, 24, 56, 7, 90, 102, 38, 76]);
// An example that has an even outlier
var evenExample = findOutlier([13, 17, 4, 101, 77, 93, 45, 67]);
console.log(oddExample); // Expected Result: 7
console.log(evenExample); // Expected Result: 4
