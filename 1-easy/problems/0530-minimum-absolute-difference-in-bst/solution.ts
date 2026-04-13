function getMinimumDifference(root: TreeNode | null): number {
    let prev: number | null = null;
    let answer = Number.POSITIVE_INFINITY;

    const inorder = (node: TreeNode | null): void => {
        if (!node) {
            return;
        }
        inorder(node.left);
        if (prev !== null) {
            answer = Math.min(answer, node.val - prev);
        }
        prev = node.val;
        inorder(node.right);
    };

    inorder(root);
    return answer;
}
