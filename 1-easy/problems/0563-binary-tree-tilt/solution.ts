function findTilt(root: TreeNode | null): number {
    let totalTilt = 0;

    const subtreeSum = (node: TreeNode | null): number => {
        if (!node) {
            return 0;
        }
        const left = subtreeSum(node.left);
        const right = subtreeSum(node.right);
        totalTilt += Math.abs(left - right);
        return node.val + left + right;
    };

    subtreeSum(root);
    return totalTilt;
}
