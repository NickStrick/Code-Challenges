// https://leetcode.com/problems/add-two-numbers/submissions/

// * Definition for singly-linked list.
// * function ListNode(val) {
// *     this.val = val;
// *     this.next = null;
// * }

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