def findComplement(num):
    """
    Find the complement of a number (flip all bits).

    Args:
        num: int - input number

    Returns:
        int - complement of the number
    """
    mask = num
    mask |= mask >> 1
    mask |= mask >> 2
    mask |= mask >> 4
    mask |= mask >> 8
    mask |= mask >> 16

    return num ^ mask
