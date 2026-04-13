def readBinaryWatch(num):
    """
    Display times on a binary watch based on number of lit LEDs.

    Args:
        num: int - number of lit LEDs

    Returns:
        List[str] - all possible times
    """
    result = []

    for h in range(12):
        for m in range(60):
            if bin(h).count('1') + bin(m).count('1') == num:
                result.append(f"{h}:{m:02d}")

    return result
