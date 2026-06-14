from collections import deque
from typing import List


class Solution:
    def kSimilarity(self, s1: str, s2: str) -> int:
        if s1 == s2:
            return 0

        queue = deque([s1])
        seen = {s1}
        steps = 0

        while queue:
            for _ in range(len(queue)):
                current = queue.popleft()
                if current == s2:
                    return steps

                for nxt in self._next_states(current, s2):
                    if nxt not in seen:
                        seen.add(nxt)
                        queue.append(nxt)

            steps += 1

        return -1

    def _next_states(self, current: str, target: str) -> List[str]:
        chars = list(current)
        index = 0
        while chars[index] == target[index]:
            index += 1

        next_states: List[str] = []
        for swap_index in range(index + 1, len(chars)):
            if chars[swap_index] == target[index] and chars[swap_index] != target[swap_index]:
                chars[index], chars[swap_index] = chars[swap_index], chars[index]
                next_states.append("".join(chars))
                chars[index], chars[swap_index] = chars[swap_index], chars[index]

        return next_states


if __name__ == "__main__":
    solution = Solution()

    assert solution.kSimilarity("ab", "ba") == 1
    assert solution.kSimilarity("abc", "bca") == 2
    assert solution.kSimilarity("abac", "baca") == 2
    assert solution.kSimilarity("aabc", "abca") == 2
    assert solution.kSimilarity("aa", "aa") == 0

    print("All tests passed!")
