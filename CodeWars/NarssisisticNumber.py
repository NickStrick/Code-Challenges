def narcissistic(value):
    # Code away
    strV = list(str(value))
    res = 0
    for num in strV:
        res += int(num)**len(strV)
    print(res)

    if res == value:
        return True
    return False


# def narcissistic(value):
#     return value == sum(int(x) ** len(str(value)) for x in str(value))


print(narcissistic(7), True, '7 is narcissistic')
print(narcissistic(371), True, '371 is narcissistic')
print(narcissistic(122), False, '122 is not narcissistic')
print(narcissistic(4887), False, '4887 is not narcissistic')
