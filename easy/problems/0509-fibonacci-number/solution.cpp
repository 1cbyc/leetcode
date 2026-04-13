class Solution {
public:
    int fib(int n) {
        if (n < 2) {
            return n;
        }

        int a = 0;
        int b = 1;
        for (int i = 2; i <= n; i++) {
            int next = a + b;
            a = b;
            b = next;
        }
        return b;
    }
};
