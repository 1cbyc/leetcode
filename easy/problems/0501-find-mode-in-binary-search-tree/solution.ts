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

function findMode(root: TreeNode | null): number[] {
    const counts = new Map<number, number>();

    const dfs = (node: TreeNode | null): void => {
        if (!node) {
            return;
        }
        counts.set(node.val, (counts.get(node.val) ?? 0) + 1);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    let maxCount = 0;
    for (const count of counts.values()) {
        maxCount = Math.max(maxCount, count);
    }

    const result: number[] = [];
    for (const [value, count] of counts.entries()) {
        if (count === maxCount) {
            result.push(value);
        }
    }
    return result;
}
