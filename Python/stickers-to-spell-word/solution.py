from typing import List
from collections import Counter

class Solution:
    def minStickers(self, stickers: List[str], target: str) -> int:
        """
        Finds the minimum number of stickers to spell target.
        Uses recursion with memoization and pruning.
        
        Complexity:
            Time: O(2^T * S * T) where T is target length and S is number of stickers.
            Space: O(2^T) for memoization.
        """
        # Precompute sticker character counts, only keeping characters in target
        target_counts = Counter(target)
        processed_stickers = []
        for sticker in stickers:
            counts = Counter(sticker) & target_counts
            if counts:
                processed_stickers.append(counts)
        
        # Memoization dictionary
        memo = {"": 0}
        
        def solve(t_str: str) -> int:
            if t_str in memo:
                return memo[t_str]
            
            # Pruning: Only use stickers that contain the first character of the current target string
            # This ensures we always reduce the target and avoid redundant combinations.
            first_char = t_str[0]
            res = float('inf')
            
            for s_counts in processed_stickers:
                if first_char in s_counts:
                    # Create the new target string after applying this sticker
                    new_t_counts = Counter(t_str)
                    for char, count in s_counts.items():
                        new_t_counts[char] -= count
                    
                    # Convert remaining counts back to a sorted string
                    new_t_str = "".join(char * count for char, count in sorted(new_t_counts.items()) if count > 0)
                    
                    # Recurse
                    sub_res = solve(new_t_str)
                    if sub_res != -1:
                        res = min(res, 1 + sub_res)
            
            memo[t_str] = res if res != float('inf') else -1
            return memo[t_str]

        # Ensure target is sorted for consistent memoization keys
        result = solve("".join(sorted(target)))
        return result

def test_solution():
    solution = Solution()
    
    # Example 1
    assert solution.minStickers(["with", "example", "science"], "thehat") == 3
    
    # Example 2
    assert solution.minStickers(["notice", "possible"], "basicbasic") == -1
    
    # Example 3 (Custom)
    assert solution.minStickers(["ab", "ac", "bc"], "abc") == 2
    
    print("All tests passed!")

if __name__ == "__main__":
    test_solution()
