class Solution {
public:
    bool isBalanced(TreeNode* root) {
        return getHeight(root) != -1;
    }
private:
    int getHeight(TreeNode* node) {
        if (!node) return 0;
        int left_height = getHeight(node->left);
        if (left_height == -1) return -1;
        int right_height = getHeight(node->right);
        if (right_height == -1) return -1;
        if (abs(left_height - right_height) > 1) return -1;
        return max(left_height, right_height) + 1;
    }
};
