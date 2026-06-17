from math import gcd


class Solution:
    def nthMagicalNumber(self, n: int, a: int, b: int) -> int:
        mod = 10**9 + 7
        lcm = a // gcd(a, b) * b

        low, high = min(a, b), min(a, b) * n
        while low < high:
            mid = (low + high) // 2
            count = mid // a + mid // b - mid // lcm
            if count < n:
                low = mid + 1
            else:
                high = mid

        return low % mod


if __name__ == "__main__":
    solution = Solution()

    assert solution.nthMagicalNumber(1, 2, 3) == 2
    assert solution.nthMagicalNumber(4, 2, 3) == 6
    assert solution.nthMagicalNumber(5, 2, 4) == 10

    print("All tests passed!")
