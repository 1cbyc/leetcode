from collections import deque
from typing import List


class TrieNode:
    def __init__(self):
        self.children = [None, None]
        self.count = 0


class BinaryTrie:
    def __init__(self):
        self.root = TrieNode()

    def update(self, value: int, delta: int) -> None:
        node = self.root
        node.count += delta

        for bit in range(14, -1, -1):
            current = (value >> bit) & 1
            if node.children[current] is None:
                node.children[current] = TrieNode()
            node = node.children[current]
            node.count += delta

    def max_xor(self, value: int) -> int:
        node = self.root
        result = 0

        for bit in range(14, -1, -1):
            current = (value >> bit) & 1
            wanted = current ^ 1

            if node.children[wanted] is not None and node.children[wanted].count > 0:
                result |= 1 << bit
                node = node.children[wanted]
            else:
                node = node.children[current]

        return result


class Solution:
    def maxXor(self, nums: List[int], k: int) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)

        for i, num in enumerate(nums):
            prefix[i + 1] = prefix[i] ^ num

        trie = BinaryTrie()
        trie.update(prefix[0], 1)

        max_deque = deque()
        min_deque = deque()
        left = 0
        answer = 0

        for right, num in enumerate(nums):
            while max_deque and nums[max_deque[-1]] <= num:
                max_deque.pop()
            max_deque.append(right)

            while min_deque and nums[min_deque[-1]] >= num:
                min_deque.pop()
            min_deque.append(right)

            while nums[max_deque[0]] - nums[min_deque[0]] > k:
                if max_deque[0] == left:
                    max_deque.popleft()
                if min_deque[0] == left:
                    min_deque.popleft()

                trie.update(prefix[left], -1)
                left += 1

            answer = max(answer, trie.max_xor(prefix[right + 1]))
            trie.update(prefix[right + 1], 1)

        return answer


def brute_force(nums: List[int], k: int) -> int:
    answer = 0

    for left in range(len(nums)):
        current_xor = 0
        current_min = nums[left]
        current_max = nums[left]

        for right in range(left, len(nums)):
            current_xor ^= nums[right]
            current_min = min(current_min, nums[right])
            current_max = max(current_max, nums[right])

            if current_max - current_min <= k:
                answer = max(answer, current_xor)

    return answer


def test_solution():
    solution = Solution()

    cases = [
        ([5, 4, 5, 6], 2, 7),
        ([5, 4, 5, 6], 1, 6),
        ([0], 0, 0),
        ([7], 0, 7),
        ([1, 2, 3], 0, 3),
        ([8, 1, 2, 12, 7], 6, 12),
    ]

    for nums, k, expected in cases:
        assert solution.maxXor(nums, k) == expected, (nums, k)

    import random

    for n in range(1, 30):
        for _ in range(500):
            nums = [random.randint(0, 31) for _ in range(n)]
            k = random.randint(0, 31)
            expected = brute_force(nums, k)
            actual = solution.maxXor(nums, k)
            assert actual == expected, (nums, k, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
