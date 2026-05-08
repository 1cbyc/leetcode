from typing import List

class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        words.sort(key=len)
        res = []
        pre_words = set()
        
        for word in words:
            if not word:
                continue
            
            n = len(word)
            dp = [False] * (n + 1)
            dp[0] = True
            
            for i in range(1, n + 1):
                for j in range(i):
                    if dp[j] and word[j:i] in pre_words:
                        dp[i] = True
                        break
            
            if dp[n]:
                res.append(word)
            pre_words.add(word)
            
        return res

def test_solution():
    sol = Solution()
    words1 = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
    assert sorted(sol.findAllConcatenatedWordsInADict(words1)) == sorted(["catsdogcats","dogcatsdog","ratcatdogcat"])
    
    words2 = ["cat","dog","catdog"]
    assert sol.findAllConcatenatedWordsInADict(words2) == ["catdog"]
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
