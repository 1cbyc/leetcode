class Solution {
public:
    TreeNode* add(vector<int>& nums, int start, int end) {
        if (start > end) return nullptr;

        int mid = start + (end - start) / 2;

        TreeNode* root = new TreeNode{nums[mid], nullptr, nullptr};

        root->left = add(nums, start, mid - 1);
        root->right = add(nums, mid + 1, end);

        return root;
    }

    TreeNode* sortedArrayToBST(vector<int>& nums) {
        TreeNode* root = add(nums, 0, nums.size() - 1);

        return root;
    }
};