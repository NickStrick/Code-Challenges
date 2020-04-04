# https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/528/week-1/3285/
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        max = nums[0]
        currSum = 0

        for num in nums:
            currSum += num
            if currSum > max:
                max = currSum
            if currSum < 0:
                currSum = 0

        return max
