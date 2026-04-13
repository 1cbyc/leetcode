function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const sameTree = (a: TreeNode | null, b: TreeNode | null): boolean => {
        if (!a && !b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return a.val === b.val && sameTree(a.left, b.left) && sameTree(a.right, b.right);
    };

    if (!subRoot) {
        return true;
    }
    if (!root) {
        return false;
    }
    return sameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
