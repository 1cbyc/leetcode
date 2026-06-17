from typing import Optional


class TreeNode:
    def __init__(self, val: int = 0, left: "Optional[TreeNode]" = None, right: "Optional[TreeNode]" = None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def recoverFromPreorder(self, traversal: str) -> Optional[TreeNode]:
        stack: list[TreeNode] = []
        index = 0
        n = len(traversal)

        while index < n:
            depth = 0
            while index < n and traversal[index] == "-":
                depth += 1
                index += 1

            start = index
            while index < n and traversal[index].isdigit():
                index += 1
            value = int(traversal[start:index])
            node = TreeNode(value)

            while len(stack) > depth:
                stack.pop()

            if stack:
                parent = stack[-1]
                if parent.left is None:
                    parent.left = node
                else:
                    parent.right = node

            stack.append(node)

        return stack[0] if stack else None


def preorder(node: Optional[TreeNode]) -> list:
    if node is None:
        return []
    return [node.val] + preorder(node.left) + preorder(node.right)


if __name__ == "__main__":
    solution = Solution()

    root = solution.recoverFromPreorder("1-2--3--4-5--6--7")
    assert preorder(root) == [1, 2, 3, 4, 5, 6, 7]
    assert root.left.left.val == 3 and root.left.right.val == 4

    root2 = solution.recoverFromPreorder("1-401--349---90--88")
    assert root2.val == 1 and root2.left.val == 401

    print("All tests passed!")
