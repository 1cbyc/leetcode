class Solution {
public:
    bool checkPerfectNumber(int num) {
        if (num <= 1) {
            return false;
        }

        int total = 1;
        for (int factor = 2; factor * factor <= num; factor++) {
            if (num % factor == 0) {
                total += factor;
                if (factor * factor != num) {
                    total += num / factor;
                }
            }
        }
        return total == num;
    }
};
