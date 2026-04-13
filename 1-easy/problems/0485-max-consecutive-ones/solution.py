def findMaxConsecutiveOnes(nums):
    """
    Find the maximum number of consecutive 1s in an array.

    Args:
        nums: List[int] - array of 0s and 1s

    Returns:
        int - maximum consecutive 1s
    """
    max_count = 0
    current_count = 0

    for num in nums:
        if num == 1:
            current_count += 1
            max_count = max(max_count, current_count)
        else:
            current_count = 0

    return max_count
