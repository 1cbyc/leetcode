def findTheDifference(s, t):
    """
    Find the extra character in string t that's not in s.

    Args:
        s: str - original string
        t: str - string with one extra character

    Returns:
        str - the extra character
    """
    result = 0

    for char in s:
        result ^= ord(char)

    for char in t:
        result ^= ord(char)

    return chr(result)
