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

// We do not remove the tree at the root or its left child because it still has a 1 as a descendant.
//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \    \
//  0   1    1
// should be pruned to:
//    0
//   / \
//  1   0
//     / \
//    1   0
//     \    \
//      1    1

function pruneProblem(headNode){
    // if node has no children, check if 1 or 0, if 0 delete node
    // if children, call function on children

    function nodeCheck(node, prevNode, dir){
        console.log(node.value)
        if (node.left){
            nodeCheck(node.left, node, 'left')
        }
        if (node.right){
            nodeCheck(node.right, node, 'right')
        }
        if ( !node.left && !node.right && node.value == 0){
                prevNode[dir] = null; 
                // console.log('del')
            }
            console.log('end')
        

    }
    nodeCheck(headNode.left, headNode, 'left')
    nodeCheck(headNode.right,headNode, 'right')
    return headNode
}

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
    
    print(){
        console.log('_____TREE_____')
        let count = 1
        function printNode (node,count) {
            let myCount = count
           console.log(node.value, count)

           if (node.left){
               printNode(node.left, myCount+1)
           } 
           if (node.right){
            printNode(node.right, myCount+1)
            }
        }
        printNode(this, count);
        console.log('______________')
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

let rootTwo = new Node(0);
rootTwo.left = new Node(1);
rootTwo.right = new Node(0);
rootTwo.right.left = new Node(1);
rootTwo.right.left.right = new Node(1);
rootTwo.right.left.left = new Node(0);
rootOne.right.right.right = new Node(1);


rootTwo.print()
pruneProblem(rootTwo).print()
rootOne.print()
pruneProblem(rootOne).print()
// console.log(pruneProblem());