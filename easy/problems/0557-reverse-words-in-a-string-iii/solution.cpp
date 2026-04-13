class Solution {
public:
    string reverseWords(string s) {
        stringstream stream(s);
        string word;
        string result;

        while (stream >> word) {
            reverse(word.begin(), word.end());
            if (!result.empty()) {
                result += ' ';
            }
            result += word;
        }
        return result;
    }
};
