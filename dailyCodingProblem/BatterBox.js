// This question was asked by BufferBox.

// Given a binary tree where all nodes are either 0 or 1, prune the tree so that subtrees containing all 0s are removed.

// For example, given the following tree:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  0   0
// should be pruned to:

//    0
//   / \
//  1   0
//     /
//    1
// We do not remove the tree at the root or its left child because it still has a 1 as a descendant.
//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \    \
//  0   0    0
// should be pruned to:

//    0
//   / \
//  1   0
//     /
//    1

function pruneProblem(headNode){
    // if node has no children, check if 1 or 0, if 0 delete node
    // if children, call function on children
}

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
    
    print(){
        
    }
  }


let rootOne = new Node(0);
rootOne.left = new Node(1);
rootOne.right = new Node(0);
rootOne.right.left = new Node(1);
rootOne.right.left.right = new Node(0);
rootOne.right.left.left = new Node(0);
rootOne.right.right = new Node(0);
rootOne.right.right.right = new Node(0);



console.log(pruneProblem(rootOne));
console.log(pruneProblem());