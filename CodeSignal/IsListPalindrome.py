# https://app.codesignal.com/interview-practice/topics/linked-lists
# https://youtu.be/cTMkO78sF5U


# O(2*n) runtime
# O(1) space
def isListPalindrome(l):
    # figure out the length of the list
    length = list_len(l)
    # ahead and behind pointers
    al = l
    bl = None

    # advance the ahead pointer to the midpoint of the list
    for _ in range(length // 2):
        # while we're advancing the fast pointer, reverse the first
        # half of the list
        prev = al
        al = al.next
        prev.next = bl
        bl = prev

    # check to see if we have a list with an odd number of nodes
    if length % 2 == 1:
        al = al.next

   # traverse ahead and behind pointers in unison
    while al and bl:
        if al.value != bl.value:
            return False

        al = al.next
        bl = bl.next

    return True


def list_len(l):
    current = l
    counter = 0

    while current:
        counter += 1
        current = current.next

    return counter
