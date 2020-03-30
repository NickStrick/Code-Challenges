# https://leetcode.com/problems/flatten-binary-tree-to-linked-list/submissions/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def __init__(self):
        self.resultArr = []

    def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        # while numbers on the left
        # take number left of root
        # insert current number in right of tree

        # while root has left node
        # add left node to array
        # insert array in right of root

        self.addToStack(root.left)
        print(self.resultArr)

        currentNode = root
        currentNode.left = None
        nextNode = root.right
        while len(self.resultArr) > 0:

            newValue = self.resultArr.pop(0)
            currentNode.right = TreeNode(newValue)

            currentNode = currentNode.right

        currentNode.right = nextNode

    def addToStack(self, root):
        # stack = self.stack
        # resultArr= self.resultArr
        if root:
            self.resultArr.append(root.val)

            self.addToStack(root.left)

            self.addToStack(root.right)
