# https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists
# https://youtu.be/-1i95V-d7BY


# DoublyLinkedListNode:
#     int data
#     DoublyLinkedListNode next
#     DoublyLinkedListNode prev
#
#

def sortedInsert(head, data):
    # create our DLL node
    new_node = DoublyLinkedListNode(data)
    # what's the base case(s)?
    # we also have to check if there is no head
    if not head:
        return new_node
    if data < head.data:
        # insert it before the head
        new_node.next = head
        head.prev = new_node
        return new_node
    # if we aren't in the base case, how do we get there?
    else:
        # there is a head and data > head.data
        rest = sortedInsert(head.next, data)
        # hook up the rest of the list with the head
        head.next = rest
        rest.prev = head
        return head
