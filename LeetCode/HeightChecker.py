# https://leetcode.com/problems/height-checker/


class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        sorts = sorted(heights)
        count = 0
        for x, y in zip(heights, sorts):
            if x != y:
                count += 1
        return count


heights = [1, 1, 4, 2, 1, 3]
print(Solution.heightChecker(heights))


# JS SOLUTION

# heights = [1,1,4,2,1,3]
# class Solution:
#     def heightChecker(self, heights):
#         sorts = sorted(heights)
#         count = 0
#         for x, y in zip(heights, sorts):
#             if x != y:
#                 count += 1
#         return count
# s = Solution()
# print(s.heightChecker(heights))


# class Solution:
#     def heightChecker(self, heights: List[int]) -> int:
#         ns = set([(key,value) for (key,value) in enumerate(heights)])
#         s = set([(key,value) for (key,value) in enumerate(sorted(heights))])
#         return len(heights) - len(ns & s)
