# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTilt(self, root: Optional[TreeNode]) -> int:
        total_tilt = 0

        def subtree_sum(node):
            nonlocal total_tilt
            if not node:
                return 0
            left = subtree_sum(node.left)
            right = subtree_sum(node.right)
            total_tilt += abs(left - right)
            return node.val + left + right

        subtree_sum(root)
        return total_tilt
