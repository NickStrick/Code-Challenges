# https://youtu.be/BN7gz17ZgvI

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
​
class Solution:
    # helper function to count the length of the linked list 
    def count_list_len(self, head: ListNode) -> int:
        count = 0
        current = head
        
        while current:
            count += 1
            current = current.next
            
        return count
    
    def isPalindrome(self, head: ListNode) -> bool:
        len = self.count_list_len(head)
        
        # init ahead and behind pointers 
        ahead = head
        behind = None
        
        # reverse the first half of the linked list 
        for _ in range(len // 2):
            temp = ahead
            ahead = temp.next
            temp.next = behind
            behind = temp
            
        # if the linked list's length is odd, move ahead forward by one node
		# so that we skip the middle element
        if len % 2 == 1:
            ahead = ahead.next
            
        # ahead moves towards the end of the list, behind moves towards the front of the list 
        while ahead:
            if ahead.val != behind.val:
                return False
            
            ahead = ahead.next
            behind = behind.next
            
        return True

        // Singly-linked lists are already defined with this interface:
// struct List<T> {
//     value: T,
//     next: Option<Box<List<T>>>
// }
// impl<T> List<T> {
//     fn new(v : T) -> Self {
//         List { value: v, next: None }
//     }
// }
// type ListNode<T> = Option<Box<List<T>>>;
//
​
fn list_len(l: &ListNode<i32>) -> usize {
    let mut count = 0;
    let mut ptr = l.as_ref();
​
    while let Some(node) = ptr {
        count += 1;
        ptr = node.next.as_ref();
    }
​
    count
}
​
fn isListPalindrome(l: ListNode<i32>) -> bool {
    // get list length
    let len = list_len(&l);
​
    // ahead and behind pointers
    let mut al = l;
    let mut bl = None;
​
    // advance the ahead pointer, reversing the list as we go
    for _ in 0..(len / 2) {
        if let Some(mut node) = al {
            al = node.next.take();
            node.next = bl;
            bl = Some(node);
        }
    }
​
    // check to see if we have a list with an odd number of nodes
    if len % 2 == 1 {
        // advance the ahead pointer once to skip the odd element
        al = al.unwrap().next;
    }
​
    // traverse ahead and behind pointers in unison
    while let (Some(n1), Some(n2)) = (al, bl) {
        if n1.value != n2.value { return false; }
        
        al = n1.next;
        bl = n2.next;
    }
​
    true
}