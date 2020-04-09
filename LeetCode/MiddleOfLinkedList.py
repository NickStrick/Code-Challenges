# https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/529/week-2/3290/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def middleNode(self, head: ListNode) -> ListNode:

        first = head
        second = head.next

        while first is not None and second is not None:
            first = first.next
            if second.next:
                second = second.next.next
            else:
                second = None

        return first
