# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def same_tree(a, b):
            if not a and not b:
                return True
            if not a or not b:
                return False
            return a.val == b.val and same_tree(a.left, b.left) and same_tree(a.right, b.right)

        if not subRoot:
            return True
        if not root:
            return False
        return same_tree(root, subRoot) or self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
