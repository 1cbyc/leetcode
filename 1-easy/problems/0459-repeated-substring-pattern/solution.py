def repeatedSubstringPattern(s):
    return s in (s + s)[1:-1]
