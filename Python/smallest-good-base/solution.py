import math

class Solution:
    def smallestGoodBase(self, n: str) -> str:
        n = int(n)
        max_m = int(math.log2(n))
        
        for m in range(max_m, 1, -1):
            low = 2
            high = int(n**(1/m)) + 1
            while low <= high:
                mid = (low + high) // 2
                
                s = 0
                for _ in range(m + 1):
                    s = s * mid + 1
                
                if s == n:
                    return str(mid)
                elif s < n:
                    low = mid + 1
                else:
                    high = mid - 1
                    
        return str(n - 1)

def test_solution():
    sol = Solution()
    assert sol.smallestGoodBase("13") == "3"
    assert sol.smallestGoodBase("4681") == "8"
    assert sol.smallestGoodBase("1000000000000000000") == "999999999999999999"
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
