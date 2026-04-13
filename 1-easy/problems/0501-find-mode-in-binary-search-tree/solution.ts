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
