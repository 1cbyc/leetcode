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

function countNodes(root: TreeNode | null): number {
    const getLeftHeight = (node: TreeNode | null): number => {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    };

    const getRightHeight = (node: TreeNode | null): number => {
        let height = 0;
        while (node) {
            height++;
            node = node.right;
        }
        return height;
    };

    if (!root) {
        return 0;
    }

    const leftHeight = getLeftHeight(root);
    const rightHeight = getRightHeight(root);
    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
}
