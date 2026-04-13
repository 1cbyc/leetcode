class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        diameter = 0;
        depth(root);
        return diameter;
    }

private:
    int diameter;

    int depth(TreeNode* node) {
        if (!node) {
            return 0;
        }
        int left = depth(node->left);
        int right = depth(node->right);
        diameter = max(diameter, left + right);
        return 1 + max(left, right);
    }
};
