function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        dfs(node.left); res.push(node.val); dfs(node.right);
    };
    dfs(root);
    return res;
}
