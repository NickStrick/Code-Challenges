def duplicate_encode(word):
    countObj = {}
    wArr = list(str(word))
    for letter in wArr:
        letter = letter.lower()
        if letter in countObj:
            countObj[letter] += 1
        else:
            countObj[letter] = 1

    res = ''
    for letter in wArr:
        letter = letter.lower()
        if countObj[letter] > 1:
            res += ')'
        else:
            res += '('
    return res


print(duplicate_encode("din"), "(((")
print(duplicate_encode("recede"), "()()()")
print(duplicate_encode("Success"), ")())())", "should ignore case")
print(duplicate_encode("(( @"), "))((")
