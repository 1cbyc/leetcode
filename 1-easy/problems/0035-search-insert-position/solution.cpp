class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int lo = 0, hi = nums.size();
        while (lo < hi) {
            int mid = (lo+hi)/2;
            if (nums[mid] < target) lo = mid+1;
            else hi = mid;
        }
        return lo;
    }
};
