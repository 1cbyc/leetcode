from typing import List


class Solution:
    def shortestSuperstring(self, words: List[str]) -> str:
        n = len(words)

        overlap = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                if i != j:
                    max_len = min(len(words[i]), len(words[j]))
                    for length in range(max_len, 0, -1):
                        if words[i].endswith(words[j][:length]):
                            overlap[i][j] = length
                            break

        dp = [[0] * n for _ in range(1 << n)]
        parent = [[-1] * n for _ in range(1 << n)]

        for mask in range(1 << n):
            for last in range(n):
                if not (mask & (1 << last)):
                    continue
                prev_mask = mask ^ (1 << last)
                if prev_mask == 0:
                    continue
                for prev in range(n):
                    if prev_mask & (1 << prev):
                        value = dp[prev_mask][prev] + overlap[prev][last]
                        if value > dp[mask][last]:
                            dp[mask][last] = value
                            parent[mask][last] = prev

        full = (1 << n) - 1
        best_last = max(range(n), key=lambda last: dp[full][last])

        order = []
        mask = full
        last = best_last
        while last != -1:
            order.append(last)
            prev = parent[mask][last]
            mask ^= 1 << last
            last = prev
        order.reverse()

        used = set(order)
        for i in range(n):
            if i not in used:
                order.append(i)

        result = words[order[0]]
        for index in range(1, len(order)):
            prev, current = order[index - 1], order[index]
            result += words[current][overlap[prev][current]:]

        return result


if __name__ == "__main__":
    solution = Solution()

    def valid(words: List[str], superstring: str) -> bool:
        return all(word in superstring for word in words)

    result = solution.shortestSuperstring(["alex", "loves", "leetcode"])
    assert valid(["alex", "loves", "leetcode"], result)
    assert len(result) == len("alexlovesleetcode")

    result2 = solution.shortestSuperstring(["catg", "ctaagt", "gcta", "ttca", "atgcatc"])
    assert valid(["catg", "ctaagt", "gcta", "ttca", "atgcatc"], result2)
    assert len(result2) == 16

    print("All tests passed!")
