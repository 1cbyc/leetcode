from typing import List


class Solution:
    def countTriplets(self, nums: List[int]) -> int:
        max_mask = 1 << 16
        pair_counts = [0] * max_mask

        for left in nums:
            for right in nums:
                pair_counts[left & right] += 1

        answer = 0
        for value in nums:
            for mask in range(max_mask):
                if (mask & value) == 0:
                    answer += pair_counts[mask]

        return answer


if __name__ == "__main__":
    solution = Solution()

    assert solution.countTriplets([2, 1, 3]) == 12
    assert solution.countTriplets([0, 0, 0]) == 27
    assert solution.countTriplets([1]) == 0
    assert solution.countTriplets([1, 2, 4]) == 24

    print("All tests passed!")
