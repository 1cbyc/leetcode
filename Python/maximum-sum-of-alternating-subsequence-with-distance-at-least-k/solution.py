from itertools import combinations
from typing import List


class FenwickMax:
    def __init__(self, n: int):
        self.n = n
        self.tree = [0] * (n + 1)

    def update(self, index: int, value: int) -> None:
        while index <= self.n:
            if value > self.tree[index]:
                self.tree[index] = value
            index += index & -index

    def query(self, index: int) -> int:
        best = 0

        while index > 0:
            best = max(best, self.tree[index])
            index -= index & -index

        return best


class Solution:
    def maxSum(self, nums: List[int], k: int) -> int:
        values = sorted(set(nums))
        rank = {value: i + 1 for i, value in enumerate(values)}
        m = len(values)
        less_tree = FenwickMax(m)
        greater_tree = FenwickMax(m)
        up = [0] * len(nums)
        down = [0] * len(nums)
        answer = max(nums)

        for i, num in enumerate(nums):
            add_index = i - k

            if add_index >= 0:
                add_value = nums[add_index]
                add_rank = rank[add_value]
                less_tree.update(add_rank, max(add_value, down[add_index]))
                greater_tree.update(m - add_rank + 1, max(add_value, up[add_index]))

            current_rank = rank[num]
            best_less = less_tree.query(current_rank - 1)
            best_greater = greater_tree.query(m - current_rank)

            if best_less:
                up[i] = best_less + num
                answer = max(answer, up[i])

            if best_greater:
                down[i] = best_greater + num
                answer = max(answer, down[i])

        return answer

    def maximumSum(self, nums: List[int], k: int) -> int:
        return self.maxSum(nums, k)


def brute_force(nums: List[int], k: int) -> int:
    answer = max(nums)

    for size in range(2, len(nums) + 1):
        for indexes in combinations(range(len(nums)), size):
            if any(indexes[i + 1] - indexes[i] < k for i in range(size - 1)):
                continue

            values = [nums[i] for i in indexes]
            if any(values[i] == values[i + 1] for i in range(size - 1)):
                continue

            signs = [values[i] < values[i + 1] for i in range(size - 1)]
            if all(signs[i] != signs[i + 1] for i in range(len(signs) - 1)):
                answer = max(answer, sum(values))

    return answer


def test_solution():
    solution = Solution()

    cases = [
        ([5, 4, 2], 2, 7),
        ([3, 5, 4, 2, 4], 1, 14),
        ([5], 1, 5),
        ([1, 1, 1], 1, 1),
        ([1, 3, 2, 4, 3], 1, 13),
        ([1, 3, 2, 4, 3], 2, 7),
        ([9, 1, 8, 2, 7, 3], 2, 17),
    ]

    for nums, k, expected in cases:
        assert solution.maxSum(nums, k) == expected, (nums, k)

    import random

    for n in range(1, 13):
        for k in range(1, n + 1):
            for _ in range(500):
                nums = [random.randint(1, 10) for _ in range(n)]
                expected = brute_force(nums, k)
                actual = solution.maxSum(nums, k)
                assert actual == expected, (nums, k, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
