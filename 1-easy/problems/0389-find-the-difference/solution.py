def findTheDifference(s, t):
    result = 0

    for char in s:
        result ^= ord(char)

    for char in t:
        result ^= ord(char)

    return chr(result)
