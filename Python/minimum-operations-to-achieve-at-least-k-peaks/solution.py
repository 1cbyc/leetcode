from itertools import combinations
from typing import List


class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        n = len(nums)

        if k == 0:
            return 0
        if k > n // 2:
            return -1

        costs = [
            max(0, max(nums[i - 1], nums[(i + 1) % n]) + 1 - nums[i])
            for i in range(n)
        ]

        def path_min(weights: List[int], count: int) -> int:
            if count == 0:
                return 0
            if count > (len(weights) + 1) // 2:
                return float("inf")

            inf = float("inf")
            skip = [inf] * (count + 1)
            take = [inf] * (count + 1)
            skip[0] = 0

            for weight in weights:
                next_skip = [inf] * (count + 1)
                next_take = [inf] * (count + 1)

                for selected in range(count + 1):
                    next_skip[selected] = min(skip[selected], take[selected])

                    if selected < count:
                        next_take[selected + 1] = min(
                            next_take[selected + 1],
                            skip[selected] + weight,
                        )

                skip, take = next_skip, next_take

            return min(skip[count], take[count])

        exclude_first = path_min(costs[1:], k)
        include_first = costs[0] + path_min(costs[2 : n - 1], k - 1)
        return int(min(exclude_first, include_first))


def brute_force(nums: List[int], k: int) -> int:
    if k == 0:
        return 0

    n = len(nums)
    best = float("inf")
    costs = [
        max(0, max(nums[i - 1], nums[(i + 1) % n]) + 1 - nums[i])
        for i in range(n)
    ]

    for indexes in combinations(range(n), k):
        chosen = set(indexes)

        if any((i + 1) % n in chosen for i in chosen):
            continue

        best = min(best, sum(costs[i] for i in indexes))

    return -1 if best == float("inf") else best


def test_solution():
    solution = Solution()

    cases = [
        ([2, 1, 2], 1, 1),
        ([4, 5, 3, 6], 2, 0),
        ([3, 7, 3], 2, -1),
        ([1, 1], 1, 1),
        ([1, 1], 2, -1),
        ([1, 2, 1, 2, 1], 2, 0),
        ([5, 1, 5, 1, 5, 1], 3, 0),
        ([1, 5, 1, 5, 1, 5], 3, 0),
    ]

    for nums, k, expected in cases:
        assert solution.minOperations(nums, k) == expected, (nums, k)

    import random

    for n in range(2, 12):
        for k in range(n + 1):
            for _ in range(500):
                nums = [random.randint(-5, 8) for _ in range(n)]
                expected = brute_force(nums, k)
                actual = solution.minOperations(nums, k)
                assert actual == expected, (nums, k, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
