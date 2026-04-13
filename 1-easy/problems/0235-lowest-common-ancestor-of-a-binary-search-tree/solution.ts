function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    while (root) {
        if (p!.val < root.val && q!.val < root.val) {
            root = root.left;
        } else if (p!.val > root.val && q!.val > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
}
