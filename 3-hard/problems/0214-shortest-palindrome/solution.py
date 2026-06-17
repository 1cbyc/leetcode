class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if not s:
            return s

        combined = s + "#" + s[::-1]
        failure = [0] * len(combined)

        for index in range(1, len(combined)):
            length = failure[index - 1]
            while length > 0 and combined[index] != combined[length]:
                length = failure[length - 1]
            if combined[index] == combined[length]:
                length += 1
            failure[index] = length

        prefix_length = failure[-1]
        return s[prefix_length:][::-1] + s


if __name__ == "__main__":
    solution = Solution()

    assert solution.shortestPalindrome("aacecaaa") == "aaacecaaa"
    assert solution.shortestPalindrome("abcd") == "dcbabcd"
    assert solution.shortestPalindrome("") == ""
    assert solution.shortestPalindrome("a") == "a"

    print("All tests passed!")
