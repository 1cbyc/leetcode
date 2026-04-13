def toHex(num):
    """
    Convert an integer to its hexadecimal representation.

    Args:
        num: int - the number to convert

    Returns:
        str - hexadecimal representation
    """
    if num == 0:
        return "0"

    hex_chars = "0123456789abcdef"
    result = ""

    # Handle negative numbers using 32-bit representation
    if num < 0:
        num = (1 << 32) + num

    while num:
        result = hex_chars[num % 16] + result
        num //= 16

    return result
