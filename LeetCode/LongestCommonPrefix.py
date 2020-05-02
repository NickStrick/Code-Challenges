# https://leetcode.com/problems/longest-common-prefix/  https://www.geeksforgeeks.org/longest-common-prefix-using-binary-search/


# A Python3 Program to find
# the longest common prefix

# A Function to find the string having the
# minimum length and returns that length
def findMinLength(strList):
    return len(min(arr, key=len))


def allContainsPrefix(strList, str,
                      start, end):
    for i in range(0, len(strList)):
        word = strList[i]
        for j in range(start, end + 1):
            if word[j] != str[j]:
                return False
    return True

# A Function that returns the longest
# common prefix from the array of strings


def CommonPrefix(strList):
    index = findMinLength(strList)
    prefix = ""     # Our resultant string

    # We will do an in-place binary search
    # on the first string of the array
    # in the range 0 to index
    low, high = 0, index - 1
    while low <= high:

        # Same as (low + high)/2, but avoids
        # overflow for large low and high
        mid = int(low + (high - low) / 2)
        if allContainsPrefix(strList,
                             strList[0], low, mid):

            # If all the strings in the input array
            # contains this prefix then append this
            # substring to our answer
            prefix = prefix + strList[0][low:mid + 1]

            # And then go for the right part
            low = mid + 1
        else:

            # Go for the left part
            high = mid - 1

    return prefix
