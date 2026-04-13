class Solution {
public:
    bool checkRecord(string s) {
        int absences = 0;
        int consecutiveLate = 0;

        for (char c : s) {
            if (c == 'A') {
                absences++;
                consecutiveLate = 0;
                if (absences >= 2) {
                    return false;
                }
            } else if (c == 'L') {
                consecutiveLate++;
                if (consecutiveLate >= 3) {
                    return false;
                }
            } else {
                consecutiveLate = 0;
            }
        }
        return true;
    }
};
