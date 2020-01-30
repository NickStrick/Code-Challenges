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

//solution 2
let sorted = function (A) {
    const result = Array(A.length).fill(0);
    let start = 0;
    let end = A.length - 1;
    let p = end;
    while (start <= end) {
        (A[start] ** 2 > A[end] ** 2 ? result[p] = A[start++] ** 2 : result[p] = A[end--] ** 2)
        p--;
    }
    return result;
};
