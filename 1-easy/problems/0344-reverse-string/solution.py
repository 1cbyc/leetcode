def reverseString(s):
    """
    Reverse a string in-place using two pointers.

    Args:
        s: List[str] - list of characters

    Returns:
        None (modifies s in-place)
    """
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
