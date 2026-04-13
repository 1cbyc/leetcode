class Solution {
public:
    bool isUgly(int n) {
        if (n <= 0) return false;
        for (int factor : {2, 3, 5}) {
            while (n % factor == 0) {
                n /= factor;
            }
        }
        return n == 1;
    }
};
