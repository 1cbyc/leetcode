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
