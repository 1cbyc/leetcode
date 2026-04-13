class Solution {
public:
    int arrangeCoins(int n) {
        long left = 0, right = n;

        while (left <= right) {
            long mid = (left + right) / 2;
            long cost = mid * (mid + 1) / 2;

            if (cost == n) {
                return mid;
            } else if (cost < n) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return right;
    }
};
