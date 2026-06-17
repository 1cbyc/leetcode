from typing import List


class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
        n = len(nums)
        flipped = [0] * n
        current_flips = 0
        result = 0

        for i in range(n):
            if i >= k:
                current_flips ^= flipped[i - k]

            if (nums[i] ^ current_flips) == 0:
                if i + k > n:
                    return -1
                flipped[i] = 1
                current_flips ^= 1
                result += 1

        return result


if __name__ == "__main__":
    solution = Solution()

    assert solution.minKBitFlips([0, 1, 0], 1) == 2
    assert solution.minKBitFlips([1, 1, 0], 2) == -1
    assert solution.minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3) == 3

    print("All tests passed!")
