# https://www.codewars.com/kata/simple-fun-number-73-strings-rearrangement/train/javascript


from itertools import permutations


def stringsRearrangement(inputArray):
    def check(a, b):
        c = 0
        for i in range(len(a)):
            if a[i] != b[i]:
                c += 1
            if c > 1:
                return False
        if c == 0:
            return False
        return True
    for perm in permutations(inputArray):
        found = True
        for j in range(1, len(perm)):
            if not check(perm[j-1], perm[j]):
                found = False
                break
        if found:
            return True
    return False
