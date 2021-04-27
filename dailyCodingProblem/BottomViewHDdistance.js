
//  Daily Coding Problem
//  Good morning! Here's your coding interview problem for today.
 
//  This problem was asked by Yelp.
 
//  The horizontal distance of a binary tree node describes how far left or right the node will be when the tree is printed out.
 
//  More rigorously, we can define it as follows:
 
//  The horizontal distance of the root is 0.
//  The horizontal distance of a left child is hd(parent) - 1.
//  The horizontal distance of a right child is hd(parent) + 1.
//  For example, for the following tree, hd(1) = -2, and hd(6) = 0.
 
//               5
//            /     \
//          3         7
//        /  \      /   \
//      1     4    6     9
//     /                /
//    0                8
//  The bottom view of a tree, then, consists of the lowest node at each horizontal distance. 
// If there are two nodes at the same depth and horizontal distance, either is acceptable.
 
//  For this tree, for example, the bottom view could be [0, 1, 3, 6, 8, 9].
 
//  Given the root to a binary tree, return its bottom view.

function hdBottomView(root){

}

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(5);
root.left = new Node(3);
root.left.left = new Node(1);
root.left.right = new Node(4)
root.left.left.left = new Node(0)
//right
root.right = new Node(7)
root.right.left = new Node(6);
root.right.right = new Node(9)
root.right.right.left = new Node(8)

console.log(hdBottomView(root))