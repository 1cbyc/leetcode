class Solution {
public:
    string addStrings(string num1, string num2) {
        string result = "";
        int carry = 0;
        int i = num1.length() - 1;
        int j = num2.length() - 1;

        while (i >= 0 || j >= 0 || carry) {
            int n1 = i >= 0 ? num1[i] - '0' : 0;
            int n2 = j >= 0 ? num2[j] - '0' : 0;

            int total = n1 + n2 + carry;
            result = char((total % 10) + '0') + result;
            carry = total / 10;

            i--;
            j--;
        }

        return result;
    }
};
