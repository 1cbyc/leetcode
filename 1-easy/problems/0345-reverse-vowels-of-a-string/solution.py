def reverseVowels(s):
    """
    Reverse only the vowels in a string.

    Args:
        s: str - input string

    Returns:
        str - string with vowels reversed
    """
    vowels = set('aeiouAEIOU')
    s_list = list(s)
    left, right = 0, len(s_list) - 1

    while left < right:
        while left < right and s_list[left] not in vowels:
            left += 1
        while left < right and s_list[right] not in vowels:
            right -= 1
        s_list[left], s_list[right] = s_list[right], s_list[left]
        left += 1
        right -= 1

    return ''.join(s_list)
