class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:
        def count_less_equal(x):
            cnt = 0
            for i in range(1, m + 1):
                cnt += min(n, x // i)
            return cnt

        low, high = 1, m * n
        while low < high:
            mid = (low + high) // 2
            if count_less_equal(mid) >= k:
                high = mid
            else:
                low = mid + 1
        return low

def test_solution():
    sol = Solution()
    assert sol.findKthNumber(3, 3, 5) == 3
    assert sol.findKthNumber(2, 3, 6) == 6
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
