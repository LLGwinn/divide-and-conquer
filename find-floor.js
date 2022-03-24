/**
 * Write a function called findFloor which accepts a sorted array and a value x, 
 * and returns the floor of x in the array. The floor of x in an array is the largest 
 * element in the array which is smaller than or equal to x. 
 * 
 * If the floor does not exist, return -1.
 */

function findFloor(arr, val) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let ops = 0;
    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midVal = arr[midIndex];
        if (arr[rightIndex] <= val) return arr[rightIndex];
        if (arr[leftIndex] > val) return -1;
        if (midVal === val) return midVal;
        if (midVal > val) {
            rightIndex = midIndex - 1;
        } else if (arr[midIndex + 1] < val) {
            leftIndex = midIndex + 1;
        } else return midVal;
    }
    return -1;
}

module.exports = findFloor