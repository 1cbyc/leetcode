class Solution {
public:
    string toHex(int num) {
        if (num == 0) return "0";

        string hex_chars = "0123456789abcdef";
        string result = "";

        unsigned int n = (unsigned int)num;

        while (n) {
            result = hex_chars[n % 16] + result;
            n /= 16;
        }

        return result;
    }
};
