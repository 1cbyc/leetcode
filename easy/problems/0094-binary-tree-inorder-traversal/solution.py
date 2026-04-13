class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def dfs(node):
            if not node: return
            dfs(node.left); res.append(node.val); dfs(node.right)
        dfs(root)
        return res
