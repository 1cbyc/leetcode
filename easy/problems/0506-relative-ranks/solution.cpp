class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        vector<int> order(score.size());
        iota(order.begin(), order.end(), 0);
        sort(order.begin(), order.end(), [&](int a, int b) {
            return score[a] > score[b];
        });

        vector<string> result(score.size());
        for (int rank = 0; rank < static_cast<int>(order.size()); rank++) {
            int idx = order[rank];
            if (rank == 0) {
                result[idx] = "Gold Medal";
            } else if (rank == 1) {
                result[idx] = "Silver Medal";
            } else if (rank == 2) {
                result[idx] = "Bronze Medal";
            } else {
                result[idx] = to_string(rank + 1);
            }
        }
        return result;
    }
};
