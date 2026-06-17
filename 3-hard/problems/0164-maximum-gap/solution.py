from typing import List


class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return 0

        low, high = min(nums), max(nums)
        if low == high:
            return 0

        n = len(nums)
        bucket_size = max(1, (high - low) // (n - 1))
        bucket_count = (high - low) // bucket_size + 1
        buckets = [[None, None] for _ in range(bucket_count)]

        for value in nums:
            index = (value - low) // bucket_size
            bucket = buckets[index]
            bucket[0] = value if bucket[0] is None else min(bucket[0], value)
            bucket[1] = value if bucket[1] is None else max(bucket[1], value)

        max_gap = 0
        previous_high = low

        for bucket_min, bucket_max in buckets:
            if bucket_min is None:
                continue
            max_gap = max(max_gap, bucket_min - previous_high)
            previous_high = bucket_max

        return max_gap


if __name__ == "__main__":
    solution = Solution()

    assert solution.maximumGap([3, 6, 9, 1]) == 3
    assert solution.maximumGap([10]) == 0
    assert solution.maximumGap([1, 1, 1, 1]) == 0
    assert solution.maximumGap([1, 10000000]) == 9999999

    print("All tests passed!")
