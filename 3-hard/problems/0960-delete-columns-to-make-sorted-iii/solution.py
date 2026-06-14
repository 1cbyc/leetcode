from typing import List


class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        cols = len(strs[0])
        dp = [1] * cols

        for i in range(1, cols):
            for j in range(i):
                if all(s[j] <= s[i] for s in strs):
                    dp[i] = max(dp[i], dp[j] + 1)

        return cols - max(dp)


if __name__ == "__main__":
    solution = Solution()

    assert solution.minDeletionSize(["babca", "bbazb"]) == 3
    assert solution.minDeletionSize(["edcba"]) == 4
    assert solution.minDeletionSize(["ghi", "def", "abc"]) == 0

    print("All tests passed!")
