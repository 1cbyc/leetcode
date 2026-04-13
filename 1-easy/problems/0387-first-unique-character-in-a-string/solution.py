def firstUniqChar(s):
    """
    Find the first unique character in a string.

    Args:
        s: str - input string

    Returns:
        int - index of first unique character, -1 if none
    """
    from collections import Counter

    char_count = Counter(s)

    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i

    return -1
