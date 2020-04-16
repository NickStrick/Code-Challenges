# https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/530/week-3/3300/
def productExceptSelf(self, nums: List[int]) -> List[int]:
    if len(nums) == 1:
        return nums
    res = []
    for i in range(len(nums)):
        currVal = 1
        for x in nums:
            if x != nums[i]:
                currVal *= x
        res.append(currVal)
    return res
