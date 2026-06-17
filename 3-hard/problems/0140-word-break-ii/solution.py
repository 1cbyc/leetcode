from typing import Dict, List


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        words = set(wordDict)
        memo: Dict[str, List[str]] = {}

        def solve(text: str) -> List[str]:
            if text in memo:
                return memo[text]
            if not text:
                return [""]

            sentences = []
            for end in range(1, len(text) + 1):
                prefix = text[:end]
                if prefix in words:
                    for suffix in solve(text[end:]):
                        sentences.append(prefix if not suffix else prefix + " " + suffix)

            memo[text] = sentences
            return sentences

        return solve(s)


if __name__ == "__main__":
    solution = Solution()

    assert sorted(solution.wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])) == sorted(
        ["cats and dog", "cat sand dog"]
    )
    assert sorted(
        solution.wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"])
    ) == sorted(["pine apple pen apple", "pineapple pen apple", "pine applepen apple"])
    assert solution.wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]) == []

    print("All tests passed!")
