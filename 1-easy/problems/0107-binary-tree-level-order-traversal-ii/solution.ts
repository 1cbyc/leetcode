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

function levelOrderBottom(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    if (!root) return result;
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const level: number[] = [];
        const nextQueue: TreeNode[] = [];
        for (const node of queue) {
            level.push(node.val);
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        result.push(level);
        queue.splice(0, queue.length, ...nextQueue);
    }
    return result.reverse();
}
