class Solution {
public:
    int longestPalindrome(string s) {
        unordered_map<char, int> count;

        for (char c : s) {
            count[c]++;
        }

        int length = 0;
        bool has_odd = false;

        for (auto& p : count) {
            length += (p.second / 2) * 2;
            if (p.second % 2 == 1) {
                has_odd = true;
            }
        }

        return length + (has_odd ? 1 : 0);
    }
};
