from collections import Counter
from typing import List


class UnionFind:
    def __init__(self, size: int) -> None:
        self.parent = list(range(size))

    def find(self, node: int) -> int:
        if self.parent[node] != node:
            self.parent[node] = self.find(self.parent[node])
        return self.parent[node]

    def union(self, left: int, right: int) -> None:
        left_root = self.find(left)
        right_root = self.find(right)
        if left_root != right_root:
            self.parent[left_root] = right_root


class Solution:
    def largestComponentSize(self, nums: List[int]) -> int:
        union_find = UnionFind(max(nums) + 1)

        for value in nums:
            factor = 2
            while factor <= value // factor:
                if value % factor == 0:
                    union_find.union(value, factor)
                    union_find.union(value, value // factor)
                factor += 1

        counts = Counter(union_find.find(value) for value in nums)
        return max(counts.values())


if __name__ == "__main__":
    solution = Solution()

    assert solution.largestComponentSize([4, 6, 15, 35]) == 4
    assert solution.largestComponentSize([20, 50, 9, 63]) == 2
    assert solution.largestComponentSize([2, 3, 6, 7, 4, 12, 21, 39]) == 8
    assert solution.largestComponentSize([2, 3, 6]) == 3
    assert solution.largestComponentSize([1]) == 1

    print("All tests passed!")
