# https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/528/week-1/3289/


class Solution:
    def countElements(self, arr: List[int]) -> int:
        arrSet = set(arr)
        count = 0

        for num in arr:
            if num+1 in arrSet:
                count += 1

        return count
