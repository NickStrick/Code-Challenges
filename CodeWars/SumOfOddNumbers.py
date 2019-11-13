def row_sum_odd_numbers(n):
    if n == 1:
        return 1
    currNum = 1
    res = 0

    # find starting number
    for i in range(n):
        currNum += (2*i)
    # get row result
    for i in range(n):
        res += currNum
        currNum += 2

    return res
