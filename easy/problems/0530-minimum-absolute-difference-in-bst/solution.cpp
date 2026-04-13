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
    int getMinimumDifference(TreeNode* root) {
        prevSet = false;
        answer = INT_MAX;
        inorder(root);
        return answer;
    }

private:
    int prevValue;
    bool prevSet;
    int answer;

    void inorder(TreeNode* node) {
        if (!node) {
            return;
        }
        inorder(node->left);
        if (prevSet) {
            answer = min(answer, node->val - prevValue);
        }
        prevValue = node->val;
        prevSet = true;
        inorder(node->right);
    }
};
