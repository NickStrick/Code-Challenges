

# how do we implement and array-reverse function in-place

def in_place_reverse(arr):
    # have two pointers one at one end the other at length and replace and reverse list until pointers are the same index

    left = 0;
    right = len(arr) - 1;

    while left < right:
        # swap the values at these two pointers
        arr[left], arr[right] = arr[right], arr[left]

        #move the pointers closer towards the center
        left+= 1
        right -= 1

    return arr

arr = [1,2,3,4,5,6,7,8]
print(in_place_reverse(arr));