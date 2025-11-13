#include <string>
#include <unordered_map>
#include <climits>

using namespace std;

class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> target_count;
        for (char c : t)
            target_count[c]++;

        int required_count = target_count.size();

        int left = 0, right = 0;
        int formed = 0;
        unordered_map<char, int> window_counts;
        int min_len = INT_MAX;
        string min_window = "";

        while (right < s.length()) {
            char char_right = s[right];
            window_counts[char_right]++;
            if (target_count.count(char_right) && window_counts[char_right] == target_count[char_right])
                formed++;

            while (formed == required_count && left <= right) {
                char char_left = s[left];
                if (right - left + 1 < min_len) {
                    min_len = right - left + 1;
                    min_window = s.substr(left, min_len);
                }

                window_counts[char_left]--;
                if (target_count.count(char_left) && window_counts[char_left] < target_count[char_left])
                    formed--;
                left++;
            }

            right++;
        }

        return min_window;
    }
};
