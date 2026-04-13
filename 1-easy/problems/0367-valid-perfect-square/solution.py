def isPerfectSquare(num):
    """
    Determine if a number is a perfect square.

    Args:
        num: int - the number to check

    Returns:
        bool - true if num is a perfect square
    """
    if num < 1:
        return False

    left, right = 1, num
    while left <= right:
        mid = (left + right) // 2
        square = mid * mid

        if square == num:
            return True
        elif square < num:
            left = mid + 1
        else:
            right = mid - 1

    return False
