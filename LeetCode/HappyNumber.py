# https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/528/week-1/3284/


class Solution:
    def isHappy(self, n: int) -> bool:
        if n == 1:
            return True

        def SumDigits(num):

            currSum = 0
            while (num):
                digit = num % 10
                num = math.floor(num/10)
                currSum += digit*digit
            return currSum
