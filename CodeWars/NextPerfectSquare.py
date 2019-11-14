from math import sqrt, pow


def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    # if number is square
    if sq % sq**0.5 == 0:
        # return next square
        return pow((sqrt(sq)+1), 2)
    else:
        return -1


print("should return the next square for perfect squares")
print(find_next_square(121), 144)
print(find_next_square(625), 676)
print(find_next_square(319225), 320356)
print(find_next_square(15241383936), 15241630849)

print("should return -1 for numbers which aren't perfect squares")
print(find_next_square(155), -1)
