class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        vector<string> result;
        int i = 0;
        while (i < nums.size()) {
            long long start = nums[i];
            while (i + 1 < nums.size() && (long long)nums[i + 1] == nums[i] + 1) {
                i++;
            }
            long long end = nums[i];
            if (start == end) {
                result.push_back(to_string(start));
            } else {
                result.push_back(to_string(start) + "->" + to_string(end));
            }
            i++;
        }
        return result;
    }
};
