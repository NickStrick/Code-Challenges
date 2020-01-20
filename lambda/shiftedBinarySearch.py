# video: https://youtu.be/zrdS8ea2-9k
# problem: https://gist.github.com/seanchen1991/9af397de06bfcc9772a54b02aa0c05e0


def shifted_binary_search(arr, target):


  # how might we figure out the rotation index?
  # split up the problem, depending on the number at the rotation index
​
# find the point where the values "drop off"
# walk through the array, check each value and its next value, if we see
# that the next value < the current value, then we've found the rotation index
# we have two sorted halves, we can run two separate binary searches on each
# sorted half
# O(log n)
# 1. find the rotation point
# can we do perform this step in faster than O(n)?
# can we do this in O(log n)?
# we can do this in O(log n)
# O(log n)
# 2. run two separate binary searches on each half
# O(2*log n)
​
# O(log n)
# run a modified binary search that can handle our rotated array of input
# find the midpoint in the rotated array, in addition, with the first and last
# values in the rotated array, can we find the target value?
# one half is entirely sorted, the other half will not be
# checking the midpoint against the first and last values should tell us
# which half is sorted and which half isn't
# if the target we're looking for exists between end value and the midpoint
# then we can just commence with a normal binary search in the sorted half
# otherwise, the value must be in the unsorted portion
​
# [49, 2]

'''
O(log n) implementation that performs a single
modified binary search run through the array.
'''
