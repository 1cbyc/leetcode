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

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current = root;
    let last_visited: TreeNode | null = null;
    while (stack.length > 0 || current) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            const peek = stack[stack.length - 1];
            if (peek.right && peek.right !== last_visited) {
                current = peek.right;
            } else {
                result.push(peek.val);
                last_visited = stack.pop()!;
            }
        }
    }
    return result;
}
