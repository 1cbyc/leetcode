def thirdMax(nums):
    unique_nums = list(set(nums))

    if len(unique_nums) < 3:
        return max(unique_nums)

    unique_nums.sort(reverse=True)
    return unique_nums[2]
