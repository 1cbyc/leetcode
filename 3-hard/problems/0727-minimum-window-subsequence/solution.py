class Solution:
    def minWindow(self, s1: str, s2: str) -> str:
        m, n = len(s1), len(s2)
        best_start = -1
        best_length = m + 1
        i = 0

        while i < m:
            j = 0
            while i < m:
                if s1[i] == s2[j]:
                    j += 1
                    if j == n:
                        break
                i += 1

            if j < n:
                break

            end = i
            j = n - 1
            while j >= 0:
                if s1[i] == s2[j]:
                    j -= 1
                i -= 1
            i += 1

            if end - i + 1 < best_length:
                best_length = end - i + 1
                best_start = i

            i += 1

        return "" if best_start == -1 else s1[best_start:best_start + best_length]


if __name__ == "__main__":
    solution = Solution()

    assert solution.minWindow("abcdebdde", "bde") == "bcde"
    assert solution.minWindow("jmeqksfrsdcmsiwvaovztaqenprpvnbstl", "u") == ""
    assert solution.minWindow("abc", "ac") == "abc"

    print("All tests passed!")
