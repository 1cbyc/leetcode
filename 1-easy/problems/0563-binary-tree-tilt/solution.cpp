class Solution {
public:
    int findTilt(TreeNode* root) {
        totalTilt = 0;
        subtreeSum(root);
        return totalTilt;
    }

private:
    int totalTilt;

    int subtreeSum(TreeNode* node) {
        if (!node) {
            return 0;
        }
        int left = subtreeSum(node->left);
        int right = subtreeSum(node->right);
        totalTilt += abs(left - right);
        return node->val + left + right;
    }
};
