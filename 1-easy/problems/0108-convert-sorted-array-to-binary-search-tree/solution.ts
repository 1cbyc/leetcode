function sortedArrayToBST(nums: number[]): TreeNode | null {
    function buildBST(left: number, right: number): TreeNode | null {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);
        return root;
    }
    return buildBST(0, nums.length - 1);
}
