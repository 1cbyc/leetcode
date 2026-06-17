from collections import deque
from typing import Optional


class TreeNode:
    def __init__(self, x: int = 0) -> None:
        self.val = x
        self.left: Optional[TreeNode] = None
        self.right: Optional[TreeNode] = None


class Codec:
    def serialize(self, root: Optional[TreeNode]) -> str:
        values = []
        queue = deque([root])
        while queue:
            node = queue.popleft()
            if node is None:
                values.append("#")
            else:
                values.append(str(node.val))
                queue.append(node.left)
                queue.append(node.right)
        return ",".join(values)

    def deserialize(self, data: str) -> Optional[TreeNode]:
        tokens = data.split(",")
        if tokens[0] == "#":
            return None

        root = TreeNode(int(tokens[0]))
        queue = deque([root])
        index = 1

        while queue:
            node = queue.popleft()
            if tokens[index] != "#":
                node.left = TreeNode(int(tokens[index]))
                queue.append(node.left)
            index += 1
            if tokens[index] != "#":
                node.right = TreeNode(int(tokens[index]))
                queue.append(node.right)
            index += 1

        return root


def to_level_list(root: Optional[TreeNode]) -> list:
    result = []
    queue = deque([root])
    while queue:
        node = queue.popleft()
        if node is None:
            result.append(None)
        else:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result


if __name__ == "__main__":
    codec = Codec()

    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.right.left = TreeNode(4)
    root.right.right = TreeNode(5)

    restored = codec.deserialize(codec.serialize(root))
    assert to_level_list(restored) == [1, 2, 3, None, None, 4, 5]
    assert codec.deserialize(codec.serialize(None)) is None

    print("All tests passed!")
