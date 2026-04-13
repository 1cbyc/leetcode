# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        def left_height(node):
            height = 0
            while node:
                height += 1
                node = node.left
            return height

        def right_height(node):
            height = 0
            while node:
                height += 1
                node = node.right
            return height

        if not root:
            return 0

        lh = left_height(root)
        rh = right_height(root)
        if lh == rh:
            return (1 << lh) - 1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
