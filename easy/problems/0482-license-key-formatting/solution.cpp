class Solution {
public:
    string licenseKeyFormatting(string S, int K) {
        string cleaned = "";
        for (char c : S) {
            if (c != '-') {
                cleaned += toupper(c);
            }
        }

        if (cleaned.empty()) return "";

        string result = "";
        int count = 0;
        for (int i = cleaned.length() - 1; i >= 0; i--) {
            if (count == K) {
                result = "-" + result;
                count = 0;
            }
            result = cleaned[i] + result;
            count++;
        }

        return result;
    }
};
