class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        counts = {}

        def dfs(node):
            if not node:
                return
            counts[node.val] = counts.get(node.val, 0) + 1
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        max_count = max(counts.values())
        return [value for value, count in counts.items() if count == max_count]
