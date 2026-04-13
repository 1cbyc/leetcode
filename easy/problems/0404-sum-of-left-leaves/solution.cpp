class Solution {
public:
    int sumOfLeftLeaves(TreeNode* root) {
        return dfs(root, false);
    }

private:
    int dfs(TreeNode* node, bool isLeft) {
        if (!node) return 0;

        if (!node->left && !node->right && isLeft) {
            return node->val;
        }

        return dfs(node->left, true) + dfs(node->right, false);
    }
};
