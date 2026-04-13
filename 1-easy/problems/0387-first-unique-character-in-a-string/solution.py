def firstUniqChar(s):
    from collections import Counter

    char_count = Counter(s)

    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i

    return -1
