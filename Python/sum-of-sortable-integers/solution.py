from bisect import bisect_left, bisect_right
from collections import defaultdict
from typing import List


class Solution:
    def sortableIntegers(self, nums: List[int]) -> int:
        n = len(nums)
        sorted_nums = sorted(nums)
        positions = defaultdict(list)

        for i, num in enumerate(nums):
            positions[num].append(i)

        run_values = []
        run_starts = []
        run_ends = []
        i = 0

        while i < n:
            j = i + 1
            while j < n and sorted_nums[j] == sorted_nums[i]:
                j += 1

            run_values.append(sorted_nums[i])
            run_starts.append(i)
            run_ends.append(j)
            i = j

        desc_prefix = [0] * n
        for i in range(n - 1):
            desc_prefix[i + 1] = desc_prefix[i] + (nums[i] > nums[i + 1])

        def block_can_rotate(left: int, right: int) -> bool:
            if right - left == 1:
                return True

            descents = desc_prefix[right - 1] - desc_prefix[left]
            descents += nums[right - 1] > nums[left]
            return descents <= 1

        def block_has_target_multiset(left: int, right: int, run_index: int) -> tuple[bool, int]:
            while run_ends[run_index] <= left:
                run_index += 1

            j = run_index
            while j < len(run_values) and run_starts[j] < right:
                overlap_left = max(left, run_starts[j])
                overlap_right = min(right, run_ends[j])
                expected = overlap_right - overlap_left
                value_positions = positions[run_values[j]]
                actual = bisect_right(value_positions, right - 1) - bisect_left(value_positions, left)

                if actual != expected:
                    return False, run_index

                j += 1

            return True, run_index

        def can_sort_with(k: int) -> bool:
            run_index = 0

            for left in range(0, n, k):
                right = left + k

                if not block_can_rotate(left, right):
                    return False

                valid_multiset, run_index = block_has_target_multiset(left, right, run_index)
                if not valid_multiset:
                    return False

            return True

        answer = 0
        for k in range(1, int(n**0.5) + 1):
            if n % k:
                continue

            if can_sort_with(k):
                answer += k

            other = n // k
            if other != k and can_sort_with(other):
                answer += other

        return answer


def brute_force(nums: List[int]) -> int:
    n = len(nums)
    target = sorted(nums)
    answer = 0

    for k in range(1, n + 1):
        if n % k:
            continue

        blocks = []
        possible = True

        for left in range(0, n, k):
            block = nums[left : left + k]
            target_block = target[left : left + k]

            if sorted(block) != target_block:
                possible = False
                break

            rotations = [block[shift:] + block[:shift] for shift in range(k)]
            if target_block not in rotations:
                possible = False
                break

            blocks.extend(target_block)

        if possible and blocks == target:
            answer += k

    return answer


def test_solution():
    solution = Solution()

    cases = [
        ([3, 1, 2], 3),
        ([7, 6, 5], 0),
        ([5, 8], 3),
        ([1], 1),
        ([1, 2, 3, 4], 7),
        ([2, 1, 4, 3], 2),
        ([2, 1, 1, 2], 4),
        ([2, 3, 1, 4, 6, 5], 0),
    ]

    for nums, expected in cases:
        assert solution.sortableIntegers(nums) == expected, nums

    import random

    for n in range(1, 10):
        for _ in range(1000):
            nums = [random.randint(1, 5) for _ in range(n)]
            expected = brute_force(nums)
            actual = solution.sortableIntegers(nums)
            assert actual == expected, (nums, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
