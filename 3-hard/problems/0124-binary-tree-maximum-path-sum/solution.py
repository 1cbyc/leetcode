from typing import Optional


class TreeNode:
    def __init__(self, val: int = 0, left: "Optional[TreeNode]" = None, right: "Optional[TreeNode]" = None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.best = float("-inf")

        def gain(node: Optional[TreeNode]) -> int:
            if node is None:
                return 0
            left = max(gain(node.left), 0)
            right = max(gain(node.right), 0)
            self.best = max(self.best, node.val + left + right)
            return node.val + max(left, right)

        gain(root)
        return self.best


if __name__ == "__main__":
    solution = Solution()

    assert solution.maxPathSum(TreeNode(1, TreeNode(2), TreeNode(3))) == 6
    assert solution.maxPathSum(
        TreeNode(-10, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
    ) == 42
    assert solution.maxPathSum(TreeNode(-3)) == -3

    print("All tests passed!")
