/**
 * Given a sorted array and a number, write a function called sortedFrequency that counts 
 * the occurrences of the number in the array.
 * 
 * Constraints:
 * Time Complexity: O(log n)
 */

function sortedFrequency(arr, num) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    let numStartIdx = 0;
    let numEndIdx = arr.length - 1;

    // Get starting index for number
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        let middleVal = arr[middleIndex];
        if (middleVal < num) {
            leftIndex = middleIndex + 1;
        } else if (middleVal > num) {
            rightIndex = middleIndex - 1;
        } else if (middleVal === num) {
            rightIndex = middleIndex - 1;
            numStartIdx = middleIndex;
        }
    }

    // Get ending index for number
    leftIndex = numStartIdx;
    rightIndex = arr.length -1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        let middleVal = arr[middleIndex];
        if (middleVal < num) {
            leftIndex = middleIndex + 1;
        } else if (middleVal > num) {
            rightIndex = middleIndex - 1;
        } else if (middleVal === num) {
            leftIndex = middleIndex + 1;
            numEndIdx = middleIndex;
        }
    }

    if (arr[numEndIdx] !== num) return -1;
    return numEndIdx - numStartIdx + 1;
}

module.exports = sortedFrequency