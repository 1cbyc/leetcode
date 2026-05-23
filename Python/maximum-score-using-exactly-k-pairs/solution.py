from itertools import combinations
from typing import List


class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        m = len(nums2)
        neg_inf = -(10**30)

        dp = [[neg_inf] * (k + 1) for _ in range(m + 1)]
        for j in range(m + 1):
            dp[j][0] = 0

        for a in nums1:
            current = [row[:] for row in dp]

            for j, b in enumerate(nums2, 1):
                product = a * b

                for pairs in range(1, k + 1):
                    current[j][pairs] = max(
                        current[j][pairs],
                        current[j - 1][pairs],
                        dp[j - 1][pairs - 1] + product,
                    )

            dp = current

        return dp[m][k]


def brute_force(nums1: List[int], nums2: List[int], k: int) -> int:
    best = -(10**30)

    for indexes1 in combinations(range(len(nums1)), k):
        for indexes2 in combinations(range(len(nums2)), k):
            score = sum(nums1[i] * nums2[j] for i, j in zip(indexes1, indexes2))
            best = max(best, score)

    return best


def test_solution():
    solution = Solution()

    cases = [
        ([1, 3, 2], [4, 5, 1], 2, 22),
        ([-2, 0, 5], [-3, 4, -1, 2], 2, 26),
        ([-3, -2], [1, 2], 2, -7),
        ([5], [-4], 1, -20),
        ([4, -5, 6], [-7, 8, -9], 1, 48),
        ([4, -5, 6], [-7, 8, -9], 3, -122),
    ]

    for nums1, nums2, k, expected in cases:
        assert solution.maxScore(nums1, nums2, k) == expected

    import random

    for n in range(1, 7):
        for m in range(1, 7):
            for k in range(1, min(n, m) + 1):
                for _ in range(200):
                    nums1 = [random.randint(-5, 5) for _ in range(n)]
                    nums2 = [random.randint(-5, 5) for _ in range(m)]
                    expected = brute_force(nums1, nums2, k)
                    actual = solution.maxScore(nums1, nums2, k)
                    assert actual == expected, (nums1, nums2, k, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
