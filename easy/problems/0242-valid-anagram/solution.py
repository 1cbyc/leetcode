def isAnagram(s: str, t: str) -> bool:
    return sorted(s) == sorted(t)
