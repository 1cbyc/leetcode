def guessNumber(n):
    """
    Binary search to find the guessed number.
    Uses the guess(x) API function provided by LeetCode.

    Args:
        n: int - upper bound of range

    Returns:
        int - the guessed number
    """
    left, right = 1, n

    while left <= right:
        mid = (left + right) // 2
        result = guess(mid)

        if result == 0:
            return mid
        elif result == -1:
            right = mid - 1
        else:
            left = mid + 1
