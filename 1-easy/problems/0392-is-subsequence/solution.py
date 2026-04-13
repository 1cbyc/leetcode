def isSubsequence(s, t):
    s_idx = 0

    for char in t:
        if s_idx < len(s) and char == s[s_idx]:
            s_idx += 1

    return s_idx == len(s)
