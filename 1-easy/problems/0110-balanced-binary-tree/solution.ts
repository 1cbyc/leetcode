/**
 * Definition for a binary tree node.
 */
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
