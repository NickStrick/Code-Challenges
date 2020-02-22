# https://app.codesignal.com/interview-practice/topics/linked-lists
# https://youtu.be/cTMkO78sF5U


def isListPalindrome(l):

    # traverse the nodes of the linked list in the order they exist
    # as we traverse, add the data of the current node to an array
    # check if the contents of the nodes form a palindrome
    # due to storing the nodes in a separate array, O(n) additional space

    # is there a reverse method we could utilize? we'd have to write this
    # ourselves

    # O(2*n) runtime
    # O(1) space
    # can we utilize multiple pointers?
    # figure out the length of the list
    # figure out the midpoint
    # we can advance a fast pointer to the midpoint

    # at this point, fast will be at the midpoint, and the first half
    # of the list will be doubly linked
    # continue traversing fast to the end of the list
    # at the same time, traverse another pointer in the opposite direction

    # walk both halves of the list, checking if each element matches
    # this assumes mutating the list is ok

    # O(2*n) runtime
    # O(n/2) space since we'd only need to copy the first half
    # if mutating is not ok
    # walk the input list, creating a reversed copy of the input as we go
    # walk both lists in unison, checking that each of their elements matches
