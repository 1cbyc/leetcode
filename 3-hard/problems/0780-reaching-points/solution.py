class Solution:
    def reachingPoints(self, sx: int, sy: int, tx: int, ty: int) -> bool:
        while tx >= sx and ty >= sy:
            if tx == sx and ty == sy:
                return True
            if tx > ty:
                if ty > sy:
                    tx %= ty
                else:
                    return (tx - sx) % ty == 0
            else:
                if tx > sx:
                    ty %= tx
                else:
                    return (ty - sy) % tx == 0

        return False


if __name__ == "__main__":
    solution = Solution()

    assert solution.reachingPoints(1, 1, 3, 5) is True
    assert solution.reachingPoints(1, 1, 2, 2) is False
    assert solution.reachingPoints(1, 1, 1, 1) is True
    assert solution.reachingPoints(3, 3, 12, 9) is True

    print("All tests passed!")
