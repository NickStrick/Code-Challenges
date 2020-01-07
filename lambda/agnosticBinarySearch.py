def agnostic_binary_search(arr, target):
    # O(n)
    # loop throiugh the entire array, checking each array element
    # to see if it matches the target
    # O(n)
    # comparing the value of each element to see if its less than or equal to the target element

    # How do i achieve an O(log n) runtime?
    # We're able to intelligently rule out elements that we dont even have to look agnostic_binary_search

    # to check descending: take element in the array, check if the element to the left  < the element
    # otherwise, we kow the array is sorted in ascending order
    # caveats: duplicates, also arrays containing only a few elements

    # might be easier to check the first and last elements in the array
    # if first and last are equal, check if the target == either
    # if it does, return the first index
    # typically, binary  search algorithms expect you to return the first index of the target if there duplicates in the array

    start = 0
    end = len(arr) - 1

    if arr[start] == arr[end]:
        if target == arr[start]:
            return start
        else:
            return -1

    # we'll need a boolean to keep track o fwhether array is ascending or descending
    is_ascending = arr[start] < arr[end]

    # if the array is ascendcing, then preform a "normal" binary search
    if is_ascending:
        return ascending_binary_search(arr, target)

    # if the array is descending, then preform "reverse" binary search
    else:
        return descending_binary_search(arr, target)
