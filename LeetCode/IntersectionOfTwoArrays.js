//https://leetcode.com/problems/intersection-of-two-arrays/

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let result = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            result.add(nums1[i])
        }
    }
    return [...result]
};