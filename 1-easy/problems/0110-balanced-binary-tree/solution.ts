function isBalanced(root: TreeNode | null): boolean {
    function getHeight(node: TreeNode | null): number {
        if (!node) return 0;
        const left_height = getHeight(node.left);
        if (left_height === -1) return -1;
        const right_height = getHeight(node.right);
        if (right_height === -1) return -1;
        if (Math.abs(left_height - right_height) > 1) return -1;
        return Math.max(left_height, right_height) + 1;
    }
    return getHeight(root) !== -1;
}
