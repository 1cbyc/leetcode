def findWords(words):
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
