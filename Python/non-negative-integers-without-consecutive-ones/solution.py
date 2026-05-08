class Solution:
    def findIntegers(self, n: int) -> int:
        f = [0] * 32
        f[0], f[1] = 1, 2
        for i in range(2, 32):
            f[i] = f[i-1] + f[i-2]
            
        ans = 0
        pre_bit = 0
        for i in range(30, -1, -1):
            if n & (1 << i):
                ans += f[i]
                if pre_bit:
                    return ans
                pre_bit = 1
            else:
                pre_bit = 0
        return ans + 1

def test_solution():
    sol = Solution()
    assert sol.findIntegers(5) == 5
    assert sol.findIntegers(1) == 2
    assert sol.findIntegers(2) == 3
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
