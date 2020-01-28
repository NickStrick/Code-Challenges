// https://leetcode.com/problems/add-two-numbers/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    const node = new ListNode(0);

    let curr = node;
    let remainder = 0;
    let sum = l1.val + l2.val + remainder;

    if (sum > 9) {
        remainder++;
        sum -= 10;
    }

    curr.val = sum;
    l1 = l1.next;
    l2 = l2.next;

    while (l1 || l2) {
        const currNode = new ListNode(0);
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + remainder;
        remainder = 0;

        if (sum > 9) {
            remainder++;
            sum -= 10;
        }

        currNode.val = sum;
        curr.next = currNode;
        curr = curr.next;
        l1 = (l1 ? l1.next : l1);
        l2 = (l2 ? l2.next : l2);
    }

    if (remainder > 0) {
        const currNode = new ListNode(remainder);
        curr.next = currNode;
    }

    return node;
};

// class Solution:
//     def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
//         re = None
//         cur = None
//         r = 0
//         while True:
//             v = (0 if l1 == None else l1.val)  + (0 if l2 == None else l2.val) + r
//             r = v // 10
//             v = v % 10
//             ln = ListNode(v)
//             if re == None:
//                 re = ln
//             else:
//                 cur.next = ln
//             cur = ln
//             if l1 != None:
//                 l1 = l1.next
//             if l2 != None:
//                 l2 = l2.next
//             if l1 == None  and l2 == None:
//                 if r != 0:
//                     cur.next = ListNode(r)
//                 break
//         return re

let f1 = [2, 4, 3]
let f2 = [5, 6, 4]

console.log(addTwoNumbers(f1, f2))