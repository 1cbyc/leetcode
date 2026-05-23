from functools import cmp_to_key
from itertools import permutations
from typing import List, Tuple


class Solution:
    def maxValue(self, nums1: List[int], nums0: List[int]) -> int:
        mod = 10**9 + 7
        segments = list(zip(nums1, nums0))
        total_length = sum(nums1) + sum(nums0)
        pow2 = [1] * (total_length + 1)

        for i in range(1, total_length + 1):
            pow2[i] = pow2[i - 1] * 2 % mod

        def runs(first: Tuple[int, int], second: Tuple[int, int]):
            result = []

            for ones, zeroes in (first, second):
                if ones:
                    result.append([1, ones])
                if zeroes:
                    result.append([0, zeroes])

            return result

        def concat_greater(first: Tuple[int, int], second: Tuple[int, int]) -> int:
            left = runs(first, second)
            right = runs(second, first)
            i = j = 0

            while i < len(left) and j < len(right):
                if left[i][0] != right[j][0]:
                    return 1 if left[i][0] > right[j][0] else -1

                skipped = min(left[i][1], right[j][1])
                left[i][1] -= skipped
                right[j][1] -= skipped

                if left[i][1] == 0:
                    i += 1
                if right[j][1] == 0:
                    j += 1

            return 0

        segments.sort(key=cmp_to_key(lambda a, b: -concat_greater(a, b)))

        answer = 0
        for ones, zeroes in segments:
            answer = (answer * pow2[ones] + pow2[ones] - 1) % mod
            answer = answer * pow2[zeroes] % mod

        return answer


def brute_force(nums1: List[int], nums0: List[int]) -> int:
    best = ""
    segments = ["1" * a + "0" * b for a, b in zip(nums1, nums0)]

    for order in permutations(range(len(segments))):
        candidate = "".join(segments[i] for i in order)
        best = max(best, candidate)

    return int(best, 2) % (10**9 + 7)


def test_solution():
    solution = Solution()

    cases = [
        ([1, 2], [1, 0], 14),
        ([3, 1], [0, 3], 120),
        ([0], [1], 0),
        ([1], [0], 1),
        ([0, 1], [2, 0], 4),
        ([1, 1, 2], [1, 0, 2], 114),
    ]

    for nums1, nums0, expected in cases:
        assert solution.maxValue(nums1, nums0) == expected, (nums1, nums0)

    import random

    for n in range(1, 8):
        for _ in range(500):
            nums1 = []
            nums0 = []

            for _ in range(n):
                a = random.randint(0, 4)
                b = random.randint(0, 4)
                if a + b == 0:
                    a = 1
                nums1.append(a)
                nums0.append(b)

            expected = brute_force(nums1, nums0)
            actual = solution.maxValue(nums1, nums0)
            assert actual == expected, (nums1, nums0, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
