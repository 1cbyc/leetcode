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
