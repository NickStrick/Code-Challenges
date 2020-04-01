# https://leetcode.com/problems/single-number/
class Solution:
    def singleNumber(self, nums: List[int]) -> int:

        numberSet = set()

        for num in nums:
            if num in numberSet:
                numberSet.remove(num)
            else:
                numberSet.add(num)
        return next(iter(numberSet))
