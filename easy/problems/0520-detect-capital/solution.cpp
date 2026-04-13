class Solution {
public:
    bool detectCapitalUse(string word) {
        bool allUpper = true;
        bool allLower = true;
        bool firstUpperRestLower = isupper(word[0]);

        for (int i = 0; i < static_cast<int>(word.size()); i++) {
            allUpper &= isupper(word[i]);
            allLower &= islower(word[i]);
            if (i > 0) {
                firstUpperRestLower &= islower(word[i]);
            }
        }

        return allUpper || allLower || firstUpperRestLower;
    }
};
