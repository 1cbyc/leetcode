def hammingDistance(x, y):
    """
    Calculate the hamming distance between two integers.

    Args:
        x: int - first number
        y: int - second number

    Returns:
        int - hamming distance (number of differing bits)
    """
    xor = x ^ y
    return bin(xor).count('1')
