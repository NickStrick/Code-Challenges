# https://www.hackerrank.com/contests/kodecrypt-2k15-wild-card-entry/challenges/phone-keypad
# https://youtu.be/Dk9dOqJaXqw


digits_to_letters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
}

# what's the runtime?


def telephone_words(digits):
    words = []
    # how do we call our tw function appropriately?
    # how do we get the word that we're building up into the words array?
    tw('', digits, words)
    return words


def tw(word_so_far, digits, words):
    # base case: len(digits) == 0
    if len(digits) == 0:
        words.append(word_so_far)
        return
    # otherwise, get the next digit
    next_digit = int(digits[0])
    # access its letters from our map
    letters = digits_to_letters[next_digit]
    # loop through all the letters
    for l in letters:
        # we're not storing these answers anywhere
        tw(word_so_far + l, digits[1:], words)


print(telephone_words('130'))
