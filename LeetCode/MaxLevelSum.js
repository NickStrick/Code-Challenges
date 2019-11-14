/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    let maxSum = -Infinity;
    let level = 1
    let maxLvl = 1
    let queue = [root]

    while (queue.length > 0) {
        let newQ = []
        let currSum = 0

        // for all things in queue, add up the sum
        for (let i = 0; i < queue.length; i++) {
            currSum += queue[i].val
            console.log(queue[i].val)
            if (queue[i].left) {
                newQ.push(queue[i].left)
            }
            if (queue[i].right) {
                newQ.push(queue[i].right)
            }
        }
        console.log('||')
        // console.log(currSum, newQ)
        if (currSum > maxSum) {
            maxSum = currSum
            maxLvl = level
        }
        level += 1
        queue = [...newQ]

        // for each node in queue, add its children to queue, and remove it from the queue


    }
    console.log(maxSum, maxLvl)
    return maxLvl

};

// Solution 2
//     if(!root) return;

//     let values = [];
//     let max = -Infinity, output = 0;

//     function traverse(node, level){
//         if (!values[level]) values.push(node.val);
//         else values[level] += node.val;

//         if (node.left) traverse(node.left, level + 1);
//         if (node.right) traverse(node.right, level + 1);
//     }

//     traverse(root, 0);

//     values.forEach(value, i => {
//         if (value > max){
//             max = value;
//             output = i;
//         }
//     })

//     return output + 1;
// };