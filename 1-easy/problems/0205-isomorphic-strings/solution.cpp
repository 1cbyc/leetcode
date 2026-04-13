class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;

        unordered_map<char, char> sToT;
        unordered_map<char, char> tToS;

        for (int i = 0; i < s.length(); i++) {
            char charS = s[i];
            char charT = t[i];

            if (sToT.count(charS)) {
                if (sToT[charS] != charT) return false;
            } else {
                sToT[charS] = charT;
            }

            if (tToS.count(charT)) {
                if (tToS[charT] != charS) return false;
            } else {
                tToS[charT] = charS;
            }
        }

        return true;
    }
};
