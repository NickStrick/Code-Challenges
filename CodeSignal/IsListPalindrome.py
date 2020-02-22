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


#  RUST IMPLEMENTATION

# fn isListPalindrome(l: ListNode<i32>) -> bool {
#     // get list length
#     let len = list_len(&l);
# ​
#     // ahead and behind pointers
#     let mut al = l;
#     let mut bl = None;
# ​
#     // advance the ahead pointer, reversing the list as we go
#     for _ in 0..(len / 2) {
#         if let Some(mut node) = al {
#             al = node.next.take();
#             node.next = bl;
#             bl = Some(node);
#         }
#     }
# ​
#     // check to see if we have a list with an odd number of nodes
#     if len % 2 == 1 {
#         // if so, advance the ahead pointer once
#         al = al.unwrap().next;
#     }
# ​
#     // traverse ahead and behind pointers in unison
#     while let (Some(n1), Some(n2)) = (al, bl) {
#         if n1.value != n2.value {
#             return false;
#         }
# ​
#         al = n1.next;
#         bl = n2.next;
#     }
# ​
#     true
# }
# ​
# fn list_len(l: &ListNode<i32>) -> usize {
#     let mut count = 0;
#     let mut ptr = l.as_ref();
# ​
#     while let Some(node) = ptr {
#         count += 1;
#         ptr = node.next.as_ref();
#     }
# ​
#     count
# }
