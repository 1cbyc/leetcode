def findDisappearedNumbers(nums):
    """
    Find all numbers that disappeared in an array of 1 to n.

    Args:
        nums: List[int] - array with numbers 1 to n

    Returns:
        List[int] - disappeared numbers
    """
    for num in nums:
        index = abs(num) - 1
        nums[index] = -abs(nums[index])

    result = []
    for i, num in enumerate(nums):
        if num > 0:
            result.append(i + 1)

    return result
