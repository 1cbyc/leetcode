class Solution {
public:
    vector<string> readBinaryWatch(int num) {
        vector<string> result;

        for (int h = 0; h < 12; h++) {
            for (int m = 0; m < 60; m++) {
                if (__builtin_popcount(h) + __builtin_popcount(m) == num) {
                    char time[6];
                    sprintf(time, "%d:%02d", h, m);
                    result.push_back(string(time));
                }
            }
        }

        return result;
    }
};
