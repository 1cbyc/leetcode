class Solution {
public:
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        if (!subRoot) {
            return true;
        }
        if (!root) {
            return false;
        }
        return sameTree(root, subRoot) || isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
    }

private:
    bool sameTree(TreeNode* a, TreeNode* b) {
        if (!a && !b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return a->val == b->val && sameTree(a->left, b->left) && sameTree(a->right, b->right);
    }
};
