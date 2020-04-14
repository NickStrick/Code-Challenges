class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        i = 0
        add = nums[0]
        print(len(nums))

        while i+add % 2 == nums[i] and i < len(nums) - 1:
            print(i, i+add % 2,  nums[i])
            i += 1
        return i+1
