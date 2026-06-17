from typing import Optional


class TreeNode:
    def __init__(self, val: int = 0, left: "Optional[TreeNode]" = None, right: "Optional[TreeNode]" = None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def minCameraCover(self, root: Optional[TreeNode]) -> int:
        self.cameras = 0
        NOT_COVERED, COVERED, HAS_CAMERA = 0, 1, 2

        def dfs(node: Optional[TreeNode]) -> int:
            if node is None:
                return COVERED

            left = dfs(node.left)
            right = dfs(node.right)

            if left == NOT_COVERED or right == NOT_COVERED:
                self.cameras += 1
                return HAS_CAMERA

            if left == HAS_CAMERA or right == HAS_CAMERA:
                return COVERED

            return NOT_COVERED

        if dfs(root) == NOT_COVERED:
            self.cameras += 1

        return self.cameras


if __name__ == "__main__":
    solution = Solution()

    assert solution.minCameraCover(TreeNode(0, TreeNode(0, TreeNode(0), TreeNode(0)))) == 1
    assert solution.minCameraCover(
        TreeNode(0, TreeNode(0, TreeNode(0, None, TreeNode(0, None, TreeNode(0)))))
    ) == 2
    assert solution.minCameraCover(TreeNode(0)) == 1

    print("All tests passed!")
