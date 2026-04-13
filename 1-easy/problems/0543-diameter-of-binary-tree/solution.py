class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter = 0

        def depth(node):
            nonlocal diameter
            if not node:
                return 0
            left = depth(node.left)
            right = depth(node.right)
            diameter = max(diameter, left + right)
            return 1 + max(left, right)

        depth(root)
        return diameter
