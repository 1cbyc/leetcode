class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        stack = []
        current = root
        last_visited = None
        while stack or current:
            if current:
                stack.append(current)
                current = current.left
            else:
                peek = stack[-1]
                if peek.right and peek.right != last_visited:
                    current = peek.right
                else:
                    result.append(peek.val)
                    last_visited = stack.pop()
        return result
