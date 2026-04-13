def longestPalindrome(s):
    """
    Find the length of the longest palindrome that can be built.

    Args:
        s: str - input string

    Returns:
        int - length of longest palindrome
    """
    from collections import Counter

    char_count = Counter(s)
    length = 0
    has_odd = False

    for count in char_count.values():
        length += (count // 2) * 2
        if count % 2 == 1:
            has_odd = True

    return length + (1 if has_odd else 0)
