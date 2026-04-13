def findWords(words):
    """
    Find words that can be typed using letters from one row on keyboard.

    Args:
        words: List[str] - list of words

    Returns:
        List[str] - words that use one keyboard row
    """
    rows = [
        set('qwertyuiop'),
        set('asdfghjkl'),
        set('zxcvbnm')
    ]

    result = []
    for word in words:
        word_lower = word.lower()
        for row in rows:
            if all(char in row for char in word_lower):
                result.append(word)
                break

    return result
