/**
 * Write a function called findRotatedIndex which accepts a rotated array of sorted numbers 
 * and an integer. The function should return the index of num in the array. 
 * If the value is not found, return -1.
 * 
 * Constraints:
 * Time Complexity: O(log n)
 */

function findRotatedIndex(arr, num) {
    
    // Get the index for start of rotation
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let rotationPoint = 0;
    let result = -1;

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

    // Check first part of array
    leftIndex = 0;
    rightIndex = rotationPoint - 1;

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[midIndex] === num) result = midIndex;
        if (arr[midIndex] < num) {
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        } 
    }

    // Check second part of array if num not found in first part
    if (result === -1) {
        leftIndex = rotationPoint;
        rightIndex = arr.length - 1;

        while (leftIndex <= rightIndex) {
            let midIndex = Math.floor((leftIndex + rightIndex) / 2);
            if (arr[midIndex] === num) result = midIndex;
            if (arr[midIndex] < num) {
                leftIndex = midIndex + 1;
            } else {
                rightIndex = midIndex - 1;
            }
        }
    }
    return result;
}

module.exports = findRotatedIndex