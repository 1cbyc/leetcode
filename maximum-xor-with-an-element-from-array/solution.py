from typing import List, Tuple


class Solution:
    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        """
        sort nums, walk queries with a simple bit trie.
        keeping the code bare and a bit chatty rather than hyper optimized.
        """
        nums.sort()
        paired: List[Tuple[int, int, int]] = [
            (limit, value, idx) for idx, (value, limit) in enumerate(queries)
        ]
        paired.sort()

        trie = _BitTrie()
        answers = [-1] * len(queries)
        i = 0

        for limit, value, idx in paired:
            while i < len(nums) and nums[i] <= limit:
                trie.add(nums[i])
                i += 1

            answers[idx] = trie.max_xor(value)

        return answers


class _BitTrie:
    def __init__(self) -> None:
        self.root: dict[int, dict] = {}
        self.has_values = False

    def add(self, number: int) -> None:
        node = self.root
        for bit in range(31, -1, -1):
            branch = (number >> bit) & 1
            if branch not in node:
                node[branch] = {}
            node = node[branch]
        self.has_values = True

    def max_xor(self, number: int) -> int:
        if not self.has_values:
            return -1

        node = self.root
        answer = 0
        for bit in range(31, -1, -1):
            want = 1 - ((number >> bit) & 1)
            if want in node:
                answer |= 1 << bit
                node = node[want]
            else:
                node = node.get(1 - want, node)
        return answer

