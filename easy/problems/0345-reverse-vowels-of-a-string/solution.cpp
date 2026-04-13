class Solution {
public:
    string reverseVowels(string s) {
        string vowels = "aeiouAEIOU";
        int left = 0, right = s.size() - 1;

        while (left < right) {
            while (left < right && vowels.find(s[left]) == string::npos) {
                left++;
            }
            while (left < right && vowels.find(s[right]) == string::npos) {
                right--;
            }
            swap(s[left], s[right]);
            left++;
            right--;
        }

        return s;
    }
};
