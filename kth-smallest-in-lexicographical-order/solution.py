class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        def dfs(curr: int, k: int) -> int:
            if k == 0:
                return curr

            next_count = self.count_next(curr, n)
            if k <= next_count:
                return dfs(curr * 10, k - 1)
            else:
                return dfs(curr + 1, k - next_count)

        return dfs(1, k - 1)

    def count_next(self, curr: int, n: int) -> int:
        count = 0
        next_val = curr + 1
        while curr <= n:
            count += min(n + 1, next_val) - curr
            curr *= 10
            next_val *= 10
        return count

solution = Solution()
print(solution.findKthNumber(13, 2))
print(solution.findKthNumber(1, 1))
