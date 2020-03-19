# https://app.codesignal.com/interview-practice/task/Hm98RnqK9Be575yoj
# https://youtu.be/va1IqN0uplE


def sumOfTwo(a, b, v):
    pass
    # examples are sorted, but are we going to actually get sorted input?
    # no, input arrays may not be sorted
    # sort the two arrays
    # could we use a similar two pointer strategy?
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
    # alternative strategy that utilizes a hash table
    # can we consider a "easier" problem?
    # if we only had a single array and had to find two values in it
    # #thatummeduptov,howwouldwedothat


def sum_of_two(arr, v):
    pass
    # sort the input array
    # use the 2 pointer technique:
    # init one pointer at the start of the array
    # init another pointer at the end of the array
    # would we ever allow the two pointers to pass each other?
    # if the pointers pass each other, then we'd just be considering
    # two values we've already looked at; we shouldn't see a new combo
    # by having the pointers pass each other
    # break out of the loop if the pointers pass each other
    # there's no two numbers that sum up to v
    # if sum of both pointers == v
    # return
    # check if the sum of both pointers == v
    # if the sum of both pointers < v
    # then that means we need a larger sum
    # increment the left pointer
    # if the sum of both pointers > v
    # then that means we need a smaller sum
    # decrement the right pointer

# Solution that uses the two-pointer technique


def sumOfTwo(a, b, v):
    # sort both input arrays
    a.sort()
    b.sort()

    # using the two pointer technique
    # start one pointer at the beginning of one of the arrays
    ap = 0
    # start another pointer at the end of the other array
    bp = len(b) - 1

    # loop so long as neither of the pointers has reached the other
    # side of its respective array
    while ap < len(a) and bp >= 0:
        sum = a[ap] + b[bp]
        # check the sum of both pointers
        if sum == v:
            return True
        # if the sum < v, we need a larger sum
        if sum < v:
            # increment the a pointer
            ap += 1
        # if the sum > v, we need a smaller sum
        if sum > v:
            # decrement the b pointer
            bp -= 1
    # no such pair found
    return False

# Solution that uses a set


def sumOfTwo(a, b, v):
    # init a set to hold all of the elements of one of the arrays
    s = set(a)
    # traverse each element in the other array
    for x in b:
        # check if v - x is in the set
        if v - x in s:
            # as soon as we see that some v - x is in the set
            # then we've found a pair
            return True
    # no pair was found, return false
    return False

# Rust Implementation

# use std::collections::HashSet;
# ​
# fn sum_of_two(a: Vec<i32>, b: Vec<i32>, v: i32) -> bool {
# 	// init a set containing v - x for each x in array a
# 	let set: HashSet<i32> = a.iter()
# 		.map(|x| v - x)
# 		.collect();
# 	// check if any element in b is contained in the set
# 	b.iter().any(|x| set.contains(x))
# }


def sumOfTwo(a, b, v):

    # are the arrays sorted?
    # no, don't assume the arrays are sorted

    # O(2(n log n)) runtime, O(1) space
    # would sorting be helpful?
    # sort both arrays
    # use a two-pointer technique, one in each array
    # start one of the pointers are the beginning of one of the arrays
    # start the other pointer at the end of the other array
    # loop so long as both pointers are still within bounds of their respective arrays
    # if the sum of both these pointer values == v, return true
    # if the sum of both these pointer values < v, then we need a larger value
    # increment the pointer at the start of the array
    # if the sum of both these pointer values > v, then we need a smaller value
    # decrement the pointer at the end of the array

    # the above idea is a variant of the sliding window technique
    # the idea: having pointers at opposite ends of a sorted array
    # if the sum of the two pointers is too small, increment the "left" pointer
    # if the sum of the two pointers is too big, decrement the "right" pointer
    # O(a + b) runtime, O(a) space
    # O(a) runtime, O(a) space
    # iterate through the a array
    # add each element to a set
    # O(b) runtime
    # iterate through the other array
    # calculate v - current element
    # check if v - current element is in the set
    # if it is, then we've found our elements
    # return true
    # if we loop through all of b and don't find anything in the set
    # then no such pair exists
    # return false
