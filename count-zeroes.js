/**
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, 
 * write a function called countZeroes, which returns the number of zeroes in the array.
 *
 * Constraints:
 * Time Complexity: O(log n) 
*/

function countZeroes(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      let middleVal = arr[middleIndex];
      if (middleVal === 1) {
          leftIndex = middleIndex + 1;
      } else if (middleVal === 0) {
          rightIndex = middleIndex - 1;
      }
  }
  return arr.length - leftIndex;
}

module.exports = countZeroes