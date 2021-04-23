// This problem was asked by Yext.

// Two nodes in a binary tree can be called cousins if they are 
// on the same level of the tree but have different parents. 
// For example, in the following diagram 4 and 6 are cousins.

//     1
//    / \
//   2   3
//  / \   \
// 4   5   6
// Given a binary tree and a particular node, find all cousins of that node

function findCousins(root, targetValue){
    //find all cousins of tragetValue in root binary tree
}

class Node{
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

let head = new Node(1)
head.left = new Node(2)
head.right = new Node(3)
head.left.left = new Node(4)
head.left.right = new Node(5)
head.right.right = new Node(6)

console.log(findCousins(head, 6))