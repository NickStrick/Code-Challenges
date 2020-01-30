//https://leetcode.com/problems/squares-of-a-sorted-array/submissions/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    A.forEach((item, index) => {
        A[index] = (item ** 2)
    })
    return A.sort(function (a, b) { return a - b })

};