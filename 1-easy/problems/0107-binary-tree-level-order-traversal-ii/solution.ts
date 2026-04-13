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
