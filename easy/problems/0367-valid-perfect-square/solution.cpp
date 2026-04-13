class Solution {
public:
    bool isPerfectSquare(int num) {
        if (num < 1) return false;

        long left = 1, right = num;
        while (left <= right) {
            long mid = (left + right) / 2;
            long square = mid * mid;

            if (square == num) {
                return true;
            } else if (square < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
};
