class Solution {
public:
    int thirdMax(vector<int>& nums) {
        set<int> unique_nums(nums.begin(), nums.end());

        if (unique_nums.size() < 3) {
            return *unique_nums.rbegin();
        }

        int count = 0;
        for (auto it = unique_nums.rbegin(); it != unique_nums.rend(); ++it) {
            if (++count == 3) {
                return *it;
            }
        }

        return -1;
    }
};
