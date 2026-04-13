class Solution {
public:
    int lengthOfLastWord(string s) {
        int len = 0, i = s.size()-1;
        while (i >= 0 && s[i] == ' ') i--;
        while (i >= 0 && s[i] != ' ') { len++; i--; }
        return len;
    }
};
