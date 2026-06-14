from typing import List


class Solution:
    def bestRotation(self, nums: List[int]) -> int:
        length = len(nums)
        deltas = [0] * length
        max_score = -1
        best_rotation = length

        for index, value in enumerate(nums):
            left = (index + 1) % length
            right = (length + index + 1 - value) % length
            deltas[left] += 1
            deltas[right] -= 1

        score = 0
        for rotation, delta in enumerate(deltas):
            score += delta
            if score > max_score:
                max_score = score
                best_rotation = rotation

        return best_rotation


if __name__ == "__main__":
    solution = Solution()

    assert solution.bestRotation([2, 3, 1, 4, 0]) == 3
    assert solution.bestRotation([1, 3, 0, 2, 4]) == 0
    assert solution.bestRotation([1]) == 0
    assert solution.bestRotation([0, 1, 2]) == 0

    print("All tests passed!")
