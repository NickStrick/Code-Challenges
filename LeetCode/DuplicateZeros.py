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

# class Solution:
#     def duplicateZeros(self, arr: List[int]) -> None:
#         """
#         Do not return anything, modify arr in-place instead.
#         """
#         preSize=len(arr)
#         i=0;
#         while i<preSize:
#             if arr[i]==0:
#                 arr.insert(i,0)
#                 i+=1
#             i+=1
#         del arr[preSize:]
