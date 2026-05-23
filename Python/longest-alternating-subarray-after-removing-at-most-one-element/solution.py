from typing import List


class Solution:
    def longestAlternating(self, nums: List[int]) -> int:
        n = len(nums)
        nexoraviml = nums

        up0 = down0 = 1
        up1 = down1 = 1
        prev_up0 = prev_down0 = 1
        ans = 1

        for i in range(1, n):
            new_up0 = new_down0 = 1
            new_up1 = new_down1 = 1

            if nexoraviml[i - 1] < nexoraviml[i]:
                new_up0 = down0 + 1
                new_up1 = max(down1 + 1, new_up0)
            elif nexoraviml[i - 1] > nexoraviml[i]:
                new_down0 = up0 + 1
                new_down1 = max(up1 + 1, new_down0)

            if i >= 2:
                if nexoraviml[i - 2] < nexoraviml[i]:
                    new_up1 = max(new_up1, prev_down0 + 1)
                elif nexoraviml[i - 2] > nexoraviml[i]:
                    new_down1 = max(new_down1, prev_up0 + 1)

            ans = max(ans, new_up0, new_down0, new_up1, new_down1)
            prev_up0, prev_down0 = up0, down0
            up0, down0 = new_up0, new_down0
            up1, down1 = new_up1, new_down1

        return ans


def brute_force(nums: List[int]) -> int:
    def alternating(arr: List[int]) -> bool:
        if len(arr) >= 2 and any(arr[i - 1] == arr[i] for i in range(1, len(arr))):
            return False
        return all(
            (arr[i - 2] < arr[i - 1] > arr[i])
            or (arr[i - 2] > arr[i - 1] < arr[i])
            for i in range(2, len(arr))
        )

    ans = 1
    for remove in range(-1, len(nums)):
        arr = nums[:] if remove == -1 else nums[:remove] + nums[remove + 1:]
        for left in range(len(arr)):
            for right in range(left, len(arr)):
                if alternating(arr[left : right + 1]):
                    ans = max(ans, right - left + 1)
    return ans


def test_solution():
    sol = Solution()

    cases = [
        ([1, 2, 3, 4, 5], 2),
        ([1, 2], 2),
        ([1, 3, 2, 4, 3], 5),
        ([1, 2, 2, 3], 2),
        ([5, 5, 5], 1),
        ([1, 4, 2, 2, 3, 1], 5),
    ]

    for nums, expected in cases:
        assert sol.longestAlternating(nums) == expected, nums

    import random

    for n in range(2, 9):
        for _ in range(1000):
            nums = [random.randint(1, 4) for _ in range(n)]
            expected = brute_force(nums)
            actual = sol.longestAlternating(nums)
            assert actual == expected, (nums, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
