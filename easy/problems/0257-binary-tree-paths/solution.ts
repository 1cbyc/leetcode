class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

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
