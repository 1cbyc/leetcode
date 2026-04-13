class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        prev = None
        answer = float("inf")

        def inorder(node):
            nonlocal prev, answer
            if not node:
                return
            inorder(node.left)
            if prev is not None:
                answer = min(answer, node.val - prev)
            prev = node.val
            inorder(node.right)

        inorder(root)
        return answer
