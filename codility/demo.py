# https://app.codility.com/demo/results/demoX6AERE-32T/


def solution(A):
    # write your code in Python 3.6
    smallestInt = 1
    A.sort()
    for el in A:
        if smallestInt == el:
            smallestInt += 1
        elif el > smallestInt:
            return smallestInt

    return smallestInt


print(solution([1, 3, 6, 4, 1, 2]))
