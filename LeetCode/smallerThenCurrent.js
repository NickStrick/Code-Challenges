// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/


let smallerThanCurrent = function (nums) {
    let newArr = []
    let count = 0;
    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i])
                count++
        }
        newArr.push(count)
        count = 0
    }
    return newArr
};
