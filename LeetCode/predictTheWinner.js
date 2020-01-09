//https://leetcode.com/problems/predict-the-winner/
/*
@param {number[]} nums
@return {boolean}
*/

var PredictTheWinner = function (nums) {
    //players can see at least the next number from either end
    // player will pick the number farthest away from the biggest inner number
    // if there are one or less inner numbers, player will pick the largest

    //[5, 1, 5, 233, 7]

    if (nums.length < 3) return true

    let player1 = []
    let player2 = []
    let first = nums[0];
    let second = nums[1];
    let secondToLast = nums[nums.length - 2];
    let last = nums[nums.length - 1];

    while (nums) {
        first = nums[0];
        second = nums[1];
        secondToLast = nums[nums.length - 2];
        last = nums[nums.length - 1];


    }


}

console.log(PredictTheWinner([5, 1, 5, 233, 7]))