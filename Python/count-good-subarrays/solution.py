from typing import List


class Solution:
    def countGoodSubarrays(self, nums: List[int]) -> int:
        n = len(nums)
        left = [-1] * n
        stack = []

        for i, num in enumerate(nums):
            while stack and nums[stack[-1]] < num and (nums[stack[-1]] | num) == num:
                stack.pop()

            left[i] = stack[-1] if stack else -1
            stack.append(i)

        right = [n] * n
        stack.clear()

        for i in range(n - 1, -1, -1):
            while stack and (nums[stack[-1]] | nums[i]) == nums[i]:
                stack.pop()

            right[i] = stack[-1] if stack else n
            stack.append(i)

        return sum((i - left[i]) * (right[i] - i) for i in range(n))


def brute_force(nums: List[int]) -> int:
    answer = 0

    for left in range(len(nums)):
        current_or = 0
        seen = set()

        for right in range(left, len(nums)):
            current_or |= nums[right]
            seen.add(nums[right])

            if current_or in seen:
                answer += 1

    return answer


def test_solution():
    solution = Solution()

    cases = [
        ([4, 2, 3], 4),
        ([1, 3, 1], 6),
        ([0], 1),
        ([0, 1], 3),
        ([1, 2, 4], 3),
        ([1, 2, 3], 5),
        ([7, 3, 1], 6),
    ]

    for nums, expected in cases:
        assert solution.countGoodSubarrays(nums) == expected, nums

    import random

    for n in range(1, 40):
        for _ in range(500):
            nums = [random.randint(0, 31) for _ in range(n)]
            expected = brute_force(nums)
            actual = solution.countGoodSubarrays(nums)
            assert actual == expected, (nums, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
