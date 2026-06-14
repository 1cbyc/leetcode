class Solution {
public:
    int minCostToMoveChips(vector<int>& position) {
        int even = 0;
        for (int pos : position) {
            even += pos % 2 == 0;
        }
        return min(even, (int)position.size() - even);
    }
};
