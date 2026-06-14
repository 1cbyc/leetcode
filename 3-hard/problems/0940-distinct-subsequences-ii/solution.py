class Solution:
    def distinctSubseqII(self, s: str) -> int:
        mod = 10**9 + 7
        ends = [0] * 26

        for char in s:
            index = ord(char) - ord("a")
            ends[index] = (sum(ends) + 1) % mod

        return sum(ends) % mod


if __name__ == "__main__":
    solution = Solution()

    assert solution.distinctSubseqII("abc") == 7
    assert solution.distinctSubseqII("aba") == 6
    assert solution.distinctSubseqII("aaa") == 3
    assert solution.distinctSubseqII("a") == 1
    assert solution.distinctSubseqII("abcd") == 15

    print("All tests passed!")
