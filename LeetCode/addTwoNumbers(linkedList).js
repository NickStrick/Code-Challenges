// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
/**
 * Definition for singly-linked list.
 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // add list 1 together
    let curr = l1
    let res1 = []
    while (curr != null) {
        res1.unshift(curr.val)
        curr = curr.next
    }
    res1 = res1.join('')
    // add lsit 2 together
    curr = l2
    let res2 = []
    while (curr != null) {
        res2.unshift(curr.val)
        curr = curr.next
    }
    res2 = res2.join('')


    // put it together and make result into linked list
    res = Number(res1) + Number(res2)
    res = String(res).split('')
    let result = new ListNode(res[res.length - 1])
    curr = result
    let i = res.length - 2
    while (i >= 0) {
        curr.next = new ListNode(res[i])
        curr = curr.next
        i--
    }
    return result

};