
//  Daily Coding Problem
//  Good morning! Here's your coding interview problem for today.
 
//  This problem was asked by Yahoo.
 
//  Recall that a full binary tree is one in which each node is either a leaf node, or has two children. Given a binary tree, convert it to a full one by removing nodes with only one child.
 
//  For example, given the following tree:
 
//           0
//        /     \
//      1         2
//    /            \
//  3                 4
//    \             /   \
//      5          6     7
//  You should convert it to:
 
//       0
//    /     \
//  5         4
//          /   \
//         6     7

function covertTree(root){

}

class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

let root = new Node(0)
root.right = new Node(2);
root.right.right = new Node(4)
root.right.right.left = new Node(6)
root.right.right.right = new Node(7)
//left
root.left = new Node(1)
root.left.left = new Node(3)
root.left.left.right = new Node(5)

console.log(covertTree(root))