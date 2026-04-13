def canConstruct(ransomNote, magazine):
    """
    Determine if ransomNote can be constructed from magazine.

    Args:
        ransomNote: str - the target note
        magazine: str - the source of characters

    Returns:
        bool - true if ransomNote can be constructed
    """
    from collections import Counter

    ransom_count = Counter(ransomNote)
    magazine_count = Counter(magazine)

    for char, count in ransom_count.items():
        if magazine_count[char] < count:
            return False

    return True
