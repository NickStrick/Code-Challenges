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


# Hash table solutionclass Solution:
    def singleNumber(self, nums: List[int]) -> int:

        hash_table = defaultdict(int)
        for i in nums:
            hash_table[i] += 1

        for i in hash_table:
            if hash_table[i] == 1:
                return i

# XOR bitwise solution


class Solution:
    def singleNumber(self, nums: List[int]) -> int:

        # return 2 * sum(set(nums)) - sum(nums)

        # https://data-flair.training/blogs/python-bitwise-operators/
        a = 0
        for i in nums:
            a ^= i
            print(a, i)
        return a
