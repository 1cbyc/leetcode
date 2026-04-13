def findDisappearedNumbers(nums):
    for num in nums:
        index = abs(num) - 1
        nums[index] = -abs(nums[index])

    result = []
    for i, num in enumerate(nums):
        if num > 0:
            result.append(i + 1)

    return result
