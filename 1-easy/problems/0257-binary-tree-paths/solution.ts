function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];

    const dfs = (node: TreeNode | null, path: string): void => {
        if (!node) return;
        path += node.val;
        if (!node.left && !node.right) {
            result.push(path);
        } else {
            if (node.left) dfs(node.left, path + "->");
            if (node.right) dfs(node.right, path + "->");
        }
    };

    dfs(root, "");
    return result;
}
