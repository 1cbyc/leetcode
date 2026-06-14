from typing import List


class Solution:
    def mergeStones(self, stones: List[int], k: int) -> int:
        n = len(stones)
        if (n - 1) % (k - 1) != 0:
            return -1

        prefix = [0] * (n + 1)
        for index, stone in enumerate(stones):
            prefix[index + 1] = prefix[index] + stone

        inf = 10**9
        dp = [[[inf] * (k + 1) for _ in range(n)] for _ in range(n)]

        for index in range(n):
            dp[index][index][1] = 0

        for length in range(2, n + 1):
            for left in range(n - length + 1):
                right = left + length - 1
                for piles in range(2, k + 1):
                    for split in range(left, right):
                        dp[left][right][piles] = min(
                            dp[left][right][piles],
                            dp[left][split][1] + dp[split + 1][right][piles - 1],
                        )

                dp[left][right][1] = dp[left][right][k] + prefix[right + 1] - prefix[left]

        return dp[0][n - 1][1]


if __name__ == "__main__":
    solution = Solution()

    assert solution.mergeStones([3, 2, 4, 1], 2) == 20
    assert solution.mergeStones([3, 2, 4, 1], 3) == -1
    assert solution.mergeStones([1, 2, 3], 2) == 9
    assert solution.mergeStones([1], 2) == 0
    assert solution.mergeStones([5, 4, 3, 2, 1], 2) == 33

    print("All tests passed!")
