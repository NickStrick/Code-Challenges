#https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/python

def solve(arr):
    # loop throug list put value and count in a dictionary
    # return  new list with dictionary
    arrCount = {}

    for i in arr:
        if i in arrCount:
            arrCount[i] += 1
        else: arrCount[i] = 1

    arrCount = {k: v for k, v in sorted(arrCount.items(), key=lambda item: item[1])}
    print(arrCount)
    

    result = []

    for num in arrCount:
        while arrCount[num] > 0:
            arrCount[num] -= 1
            result.append(num)
    
    return result
