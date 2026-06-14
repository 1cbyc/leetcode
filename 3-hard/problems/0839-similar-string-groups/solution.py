from typing import List


class UnionFind:
    def __init__(self, size: int) -> None:
        self.parent = list(range(size))
        self.size = [1] * size

    def find(self, node: int) -> int:
        if self.parent[node] != node:
            self.parent[node] = self.find(self.parent[node])
        return self.parent[node]

    def union(self, left: int, right: int) -> bool:
        left_root = self.find(left)
        right_root = self.find(right)
        if left_root == right_root:
            return False

        if self.size[left_root] < self.size[right_root]:
            left_root, right_root = right_root, left_root

        self.parent[right_root] = left_root
        self.size[left_root] += self.size[right_root]
        return True


class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
        groups = len(strs)
        length = len(strs[0])
        union_find = UnionFind(groups)

        for i, first in enumerate(strs):
            for j in range(i):
                second = strs[j]
                if sum(first[k] != second[k] for k in range(length)) <= 2:
                    if union_find.union(i, j):
                        groups -= 1

        return groups


if __name__ == "__main__":
    solution = Solution()

    assert solution.numSimilarGroups(["tars", "rats", "arts", "star"]) == 2
    assert solution.numSimilarGroups(["omv", "ovm"]) == 1
    assert solution.numSimilarGroups(["abc", "abc"]) == 1

    print("All tests passed!")
