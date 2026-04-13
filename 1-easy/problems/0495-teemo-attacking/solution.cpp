class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        if (timeSeries.empty()) {
            return 0;
        }

        int total = 0;
        for (int i = 1; i < static_cast<int>(timeSeries.size()); i++) {
            total += min(duration, timeSeries[i] - timeSeries[i - 1]);
        }
        return total + duration;
    }
};
