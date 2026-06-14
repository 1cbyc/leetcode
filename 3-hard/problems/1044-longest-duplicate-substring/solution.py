from typing import Dict


class Solution:
    def longestDupSubstring(self, s: str) -> str:
        n = len(s)
        nums = [ord(char) - ord("a") for char in s]
        base = 26
        mod = 2**63 - 1

        def find_duplicate(length: int) -> str:
            if length == 0:
                return ""

            power = pow(base, length, mod)
            hash_val = 0
            for index in range(length):
                hash_val = (hash_val * base + nums[index]) % mod

            seen: Dict[int, int] = {hash_val: 0}
            for start in range(1, n - length + 1):
                hash_val = (
                    hash_val * base
                    - nums[start - 1] * power
                    + nums[start + length - 1]
                ) % mod

                if hash_val in seen:
                    prev = seen[hash_val]
                    if s[prev : prev + length] == s[start : start + length]:
                        return s[start : start + length]

                seen[hash_val] = start

            return ""

        left, right = 0, n
        answer = ""
        while left < right:
            mid = (left + right + 1) // 2
            candidate = find_duplicate(mid)
            if candidate:
                left = mid
                answer = candidate
            else:
                right = mid - 1

        return answer


if __name__ == "__main__":
    solution = Solution()

    assert solution.longestDupSubstring("banana") == "ana"
    assert solution.longestDupSubstring("abcd") == ""
    assert solution.longestDupSubstring("aabcaabdaab") in {"aab", "aabd"}

    print("All tests passed!")
