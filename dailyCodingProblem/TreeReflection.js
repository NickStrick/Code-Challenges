// This problem was asked by Amazon.

// A tree is symmetric if its data and shape remain unchanged when it is reflected about the root node. The following tree is an example:

//         4
//       / | \
//     3   5   3
//   /           \
// 9              9
// Given a k-ary tree, determine whether it is symmetric.

//questions:
    //how many children can a tree nod ehave?
    // can it be more then four?
    //what are the requirements for a new tree to be made?
    // can i use a stack or a queue?


    

function determineSymetrical(treeRoot){

}

class TreeNode {
    constructor(value){
        this.value = value;
        this.children = [null,null,null,null]
    }
    printTree(){
        console.log(this.value)
    }
}

console.log(determineSymetrical())