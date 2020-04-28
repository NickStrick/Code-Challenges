# https://leetcode.com/problems/median-of-two-sorted-arrays/


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums1.extend(nums2)
        nums1.sort()
        print(nums1)
        m1 = nums1[math.floor(len(nums1)/2)]
        m2 = m1+1
        if nums1
        res = (nums1[m1]+nums1[m2])/2
        return res
