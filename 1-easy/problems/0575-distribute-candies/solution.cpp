class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        unordered_set<int> uniqueTypes(candyType.begin(), candyType.end());
        return min(static_cast<int>(uniqueTypes.size()), static_cast<int>(candyType.size() / 2));
    }
};
