class Solution {
public:
    string convertToBase7(int num) {
        if (num == 0) {
            return "0";
        }

        string sign = num < 0 ? "-" : "";
        int value = abs(num);
        string digits;
        while (value > 0) {
            digits.push_back(static_cast<char>('0' + value % 7));
            value /= 7;
        }
        reverse(digits.begin(), digits.end());
        return sign + digits;
    }
};
