/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
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
