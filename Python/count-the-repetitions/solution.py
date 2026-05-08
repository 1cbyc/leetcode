class Solution:
    def getMaxRepetitions(self, s1: str, n1: int, s2: str, n2: int) -> int:
        s2_count = {0: 0}
        next_idx = {0: 0}
        seen = {0: 0}
        
        count, ptr = 0, 0
        for i in range(1, n1 + 1):
            for char in s1:
                if char == s2[ptr]:
                    ptr += 1
                    if ptr == len(s2):
                        ptr = 0
                        count += 1
            
            s2_count[i] = count
            next_idx[i] = ptr
            
            if ptr in seen:
                prev_i = seen[ptr]
                cycle_len = i - prev_i
                cycle_count = s2_count[i] - s2_count[prev_i]
                
                remaining_blocks = n1 - i
                num_cycles = remaining_blocks // cycle_len
                
                ans = s2_count[i] + num_cycles * cycle_count
                ans += s2_count[prev_i + remaining_blocks % cycle_len] - s2_count[prev_i]
                return ans // n2
            
            seen[ptr] = i
            
        return s2_count[n1] // n2

def test_solution():
    sol = Solution()
    assert sol.getMaxRepetitions("acb", 4, "ab", 2) == 2
    assert sol.getMaxRepetitions("acb", 1, "acb", 1) == 1
    assert sol.getMaxRepetitions("aaa", 3, "a", 1) == 9
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
