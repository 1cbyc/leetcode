function maxDepth(root: _Node | null): number {
    if (!root) {
        return 0;
    }

    let childDepth = 0;
    for (const child of root.children) {
        childDepth = Math.max(childDepth, maxDepth(child));
    }
    return 1 + childDepth;
}
