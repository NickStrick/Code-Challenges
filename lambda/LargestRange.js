// [2,3,4,5,6] returns [2,6]
// return largest range of numbers in arrray

let array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];//ouput [0,7]
let array2 = [19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14] // output [10,19]


let largestRange = array => {
    let bestRange = [];
    let longestLength = 0;
    const nums = {};
    for (const num of array) {
        nums[num] = true;
    }
    for (const num of array) {
        if (!nums[num]) continue;
        nums[num] = false;
        let currentLength = 1;
        let left = num - 1;
        let right = num + 1;
        while (left in nums) {
            nums[left] = false;
            currentLength++
            left--
        }
        while (right in nums) {
            nums[right] = false;
            currentLength++
            right++;
        }
        if (currentLength > longestLength) {
            longestLength = currentLength;
            bestRange = [left + 1, right - 1]
        }
    }
    return bestRange;
}

console.log(largestRange(array));
console.log(largestRange(array2));
