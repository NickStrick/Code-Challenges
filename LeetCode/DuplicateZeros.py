# https://leetcode.com/problems/duplicate-zeros/


class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        lastIndex = len(arr) - 1
        i = 0
        while i < lastIndex:
            if arr[i] == 0:
                for r in range(lastIndex, i, -1):
                    arr[r] = arr[r - 1]
                i += 1
            i += 1
