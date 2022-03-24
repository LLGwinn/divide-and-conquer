/**
 * Write a function called findRotationCount which accepts an array of distinct numbers 
 * sorted in increasing order. The array has been rotated counter-clockwise n number of times. 
 * Given such an array, find the value of n.
 * 
 * Constraints:
 * Time Complexity: O(log n)
 */

function findRotationCount(arr) {
        // Get the index for start of rotation
        let leftIndex = 0;
        let rightIndex = arr.length - 1;
        let rotationPoint = 0;
    
        while (leftIndex <= rightIndex) {
            let midIndex = Math.floor((leftIndex + rightIndex) / 2);
            if (arr[midIndex] > arr[midIndex + 1]) {
                rotationPoint =  midIndex + 1;
            }
            if (arr[leftIndex] <= arr[midIndex]) {
                leftIndex = midIndex + 1;
            } else {
                rightIndex = midIndex;
            }
        }

        return rotationPoint;
}

module.exports = findRotationCount