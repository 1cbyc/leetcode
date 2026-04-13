def sumOfLeftLeaves(root):
    """
    Sum all left leaf nodes in a binary tree.

    Args:
        root: TreeNode - root of the binary tree

    Returns:
        int - sum of all left leaves
    """
    def dfs(node, is_left):
        if not node:
            return 0

        if not node.left and not node.right and is_left:
            return node.val

        return dfs(node.left, True) + dfs(node.right, False)

    return dfs(root, False)
