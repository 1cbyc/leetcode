def repeatedSubstringPattern(s):
    """
    Check if a string is composed of a repeated substring.

    Args:
        s: str - input string

    Returns:
        bool - true if composed of repeated substring
    """
    return s in (s + s)[1:-1]
