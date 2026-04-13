function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: (TreeNode | null)[] = root ? [root] : [];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node) {
            result.push(node.val);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
    return result;
}
