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


def shifted_binary_search_1(arr, target):
  floor = 0
  ceiling = len(arr) - 1

  while floor < ceiling:
    mid = floor + (ceiling - floor) // 2
    first = arr[floor]
    last = arr[ceiling]


​
    if arr[mid] == target:
      return mid
    if first == target:
      return floor
    if last == target:
      return ceiling
​
    # right side is the sorted side
    if arr[mid] < last:
      if target > arr[mid] and target < last:
        # target is in the sorted side
        floor = mid + 1
      else:
        # target is in the unsorted side
        ceiling = mid - 1
​
    # otherwise, left side is the sorted side
    else:
      if target < arr[mid] and target > first:
        ceiling = mid - 1
      else:
        floor = mid + 1

  # didn't find the target
  return -1
​
'''
O(2 * log n) implementation that follows the two-phase approach 
First finds the index of the rotation point, then 
performs a regular binary search on the sorted half that
must contain the target element. 
'''
def shifted_binary_search_2(arr, target):
  floor = 0
  ceiling = len(arr) - 1
  smallest = find_rotation_point(arr)
  
  # determine which half to run a single binary search
  # on to find the target 
  if target >= arr[smallest] and target <= arr[ceiling]:
    # binary search the right side 
    return binary_search(arr, smallest, ceiling, target)
  else:
    # binary search the left side 
    return binary_search(arr, floor, smallest - 1, target)
