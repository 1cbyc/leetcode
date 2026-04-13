def thirdMax(nums):
    """
    Find the third maximum number in an array.

    Args:
        nums: List[int] - input array

    Returns:
        int - third maximum or maximum if less than 3 unique numbers
    """
    unique_nums = list(set(nums))

    if len(unique_nums) < 3:
        return max(unique_nums)

    unique_nums.sort(reverse=True)
    return unique_nums[2]
