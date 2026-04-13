def arrangeCoins(n):
    """
    Determine how many complete stairs can be built with n coins.

    Args:
        n: int - number of coins

    Returns:
        int - number of complete stairs
    """
    left, right = 0, n

    while left <= right:
        mid = (left + right) // 2
        cost = mid * (mid + 1) // 2

        if cost == n:
            return mid
        elif cost < n:
            left = mid + 1
        else:
            right = mid - 1

    return right
