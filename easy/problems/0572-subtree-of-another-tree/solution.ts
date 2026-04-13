/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val)
 *         this.left = (left === undefined ? null : left)
 *         this.right = (right === undefined ? null : right)
 *     }
 * }
 */

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
