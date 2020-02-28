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
