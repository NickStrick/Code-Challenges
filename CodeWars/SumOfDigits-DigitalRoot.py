def digital_root(n):
    res = str(n)
    while len(res) != 1:
        nArr = []
        nArr[:0] = res
        newRes = 0
        for num in nArr:
            newRes += int(num)
        res = str(newRes)
    return int(res)


print(digital_root(16), 7)
print(digital_root(456), 6)
