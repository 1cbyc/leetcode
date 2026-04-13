class Solution {
public:
    int hammingDistance(int x, int y) {
        int xor_val = x ^ y;
        return __builtin_popcount(xor_val);
    }
};
