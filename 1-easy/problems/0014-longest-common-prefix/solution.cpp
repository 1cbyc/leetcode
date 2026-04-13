class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        string prefix = strs[0];
        for (auto& s : strs) {
            while (s.find(prefix) != 0) {
                prefix = prefix.substr(0, prefix.size()-1);
                if (prefix.empty()) return "";
            }
        }
        return prefix;
    }
};
