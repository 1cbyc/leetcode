class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def binaryTreePaths(root: TreeNode) -> list[str]:
    result = []

    def dfs(node, path):
        if not node:
            return
        path += str(node.val)
        if not node.left and not node.right:
            result.append(path)
        else:
            if node.left:
                dfs(node.left, path + "->")
            if node.right:
                dfs(node.right, path + "->")

    dfs(root, "")
    return result
