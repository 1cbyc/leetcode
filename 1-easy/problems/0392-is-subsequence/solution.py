def isSubsequence(s, t):
    """
    Check if s is a subsequence of t.

    Args:
        s: str - potential subsequence
        t: str - string to check against

    Returns:
        bool - true if s is a subsequence of t
    """
    s_idx = 0

    for char in t:
        if s_idx < len(s) and char == s[s_idx]:
            s_idx += 1

    return s_idx == len(s)
