function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    const depth = (node: TreeNode | null): number => {
        if (!node) {
            return 0;
        }
        const left = depth(node.left);
        const right = depth(node.right);
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    };

    depth(root);
    return diameter;
}
