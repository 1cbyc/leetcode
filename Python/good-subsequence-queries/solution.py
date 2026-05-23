from math import gcd
from typing import List


class GcdTree:
    def __init__(self, values: List[int]):
        self.n = len(values)
        self.size = 1

        while self.size < self.n:
            self.size *= 2

        self.tree = [0] * (self.size * 2)

        for i, value in enumerate(values):
            self.tree[self.size + i] = value

        for i in range(self.size - 1, 0, -1):
            self.tree[i] = gcd(self.tree[i * 2], self.tree[i * 2 + 1])

    def update(self, index: int, value: int) -> None:
        index += self.size
        self.tree[index] = value
        index //= 2

        while index:
            self.tree[index] = gcd(self.tree[index * 2], self.tree[index * 2 + 1])
            index //= 2

    def has_excludable_index(self) -> bool:
        def search(node: int, left: int, right: int, outside_gcd: int) -> bool:
            if left >= self.n:
                return False

            if outside_gcd == 1:
                return True

            if right - left == 1:
                return outside_gcd == 1

            mid = (left + right) // 2
            left_child = node * 2
            right_child = left_child + 1

            if search(
                left_child,
                left,
                mid,
                gcd(outside_gcd, self.tree[right_child]),
            ):
                return True

            return search(
                right_child,
                mid,
                right,
                gcd(outside_gcd, self.tree[left_child]),
            )

        return search(1, 0, self.size, 0)


class Solution:
    def countGoodSubseq(self, nums: List[int], p: int, queries: List[List[int]]) -> int:
        n = len(nums)

        def transformed(value: int) -> int:
            return value // p if value % p == 0 else 0

        values = [transformed(value) for value in nums]
        divisible_count = sum(value != 0 for value in values)
        tree = GcdTree(values)
        answer = 0

        for index, value in queries:
            if values[index] != 0:
                divisible_count -= 1

            nums[index] = value
            values[index] = transformed(value)
            tree.update(index, values[index])

            if values[index] != 0:
                divisible_count += 1

            if divisible_count == 0 or tree.tree[1] != 1:
                continue

            if divisible_count < n:
                answer += 1
            elif tree.has_excludable_index():
                answer += 1

        return answer


def brute_force(nums: List[int], p: int, queries: List[List[int]]) -> int:
    nums = nums[:]
    answer = 0

    for index, value in queries:
        nums[index] = value
        n = len(nums)
        good = False

        for mask in range(1, 1 << n):
            if mask.bit_count() == n:
                continue

            current_gcd = 0
            for i, num in enumerate(nums):
                if mask >> i & 1:
                    current_gcd = gcd(current_gcd, num)

            if current_gcd == p:
                good = True
                break

        answer += good

    return answer


def test_solution():
    solution = Solution()

    cases = [
        ([4, 8, 12, 16], 2, [[0, 3], [2, 6]], 1),
        ([6, 10, 15], 1, [[0, 6]], 0),
        ([6, 10, 15, 7], 1, [[3, 14]], 1),
        ([2], 2, [[0, 2], [0, 4], [0, 3]], 0),
        ([2, 3], 1, [[0, 2]], 0),
        ([2, 3, 5], 1, [[0, 2]], 1),
    ]

    for nums, p, queries, expected in cases:
        assert solution.countGoodSubseq(nums[:], p, [query[:] for query in queries]) == expected

    import random

    for n in range(1, 9):
        for _ in range(1000):
            nums = [random.randint(1, 24) for _ in range(n)]
            p = random.randint(1, 8)
            queries = [
                [random.randrange(n), random.randint(1, 24)]
                for _ in range(random.randint(1, 10))
            ]
            expected = brute_force(nums, p, [query[:] for query in queries])
            actual = solution.countGoodSubseq(nums[:], p, [query[:] for query in queries])
            assert actual == expected, (nums, p, queries, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
