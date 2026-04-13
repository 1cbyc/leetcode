/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

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
