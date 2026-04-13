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
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> result;
        if (!root) return result;
        stack<TreeNode*> st;
        TreeNode* current = root;
        TreeNode* last_visited = nullptr;
        while (!st.empty() || current) {
            if (current) {
                st.push(current);
                current = current->left;
            } else {
                TreeNode* peek = st.top();
                if (peek->right && peek->right != last_visited) {
                    current = peek->right;
                } else {
                    result.push_back(peek->val);
                    last_visited = peek;
                    st.pop();
                }
            }
        }
        return result;
    }
};
