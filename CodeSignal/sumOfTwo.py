# https://app.codesignal.com/interview-practice/task/Hm98RnqK9Be575yoj
# https://youtu.be/va1IqN0uplE


def sumOfTwo(a, b, v):

    # examples are sorted, but are we going to actually get sorted input?
    # no, input arrays may not be sorted
​
# sort the two arrays
# could we use a similar two pointer strategy?
​
# if we're hash tables, what is going in the hash tables?
# store the elements of one of the arrays in the hash table
# make a sum of an element from a and an element from b
# check if they equal v
# does moving all of the elements from one array into a hash table help us?
# hash tables help us with lookups
# loop through each element x in b
# check if v - x is in the hash table
# as soon as we see that some v - x is in the table
# then we've found a pair
# return true
# no pair was found, return false
