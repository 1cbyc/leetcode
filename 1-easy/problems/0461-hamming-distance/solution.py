def hammingDistance(x, y):
    xor = x ^ y
    return bin(xor).count('1')
