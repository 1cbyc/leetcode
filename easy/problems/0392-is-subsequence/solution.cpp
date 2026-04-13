class Solution {
public:
    bool isSubsequence(string s, string t) {
        int s_idx = 0;

        for (char c : t) {
            if (s_idx < s.length() && c == s[s_idx]) {
                s_idx++;
            }
        }

        return s_idx == s.length();
    }
};
