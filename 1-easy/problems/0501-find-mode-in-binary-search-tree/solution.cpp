class Solution {
public:
    vector<int> findMode(TreeNode* root) {
        unordered_map<int, int> counts;
        dfs(root, counts);

        int maxCount = 0;
        for (const auto& [value, count] : counts) {
            maxCount = max(maxCount, count);
        }

        vector<int> result;
        for (const auto& [value, count] : counts) {
            if (count == maxCount) {
                result.push_back(value);
            }
        }
        return result;
    }

private:
    void dfs(TreeNode* node, unordered_map<int, int>& counts) {
        if (!node) {
            return;
        }
        counts[node->val]++;
        dfs(node->left, counts);
        dfs(node->right, counts);
    }
};
