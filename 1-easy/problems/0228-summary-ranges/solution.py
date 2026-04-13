def summaryRanges(nums: list[int]) -> list[str]:
    result = []
    i = 0
    while i < len(nums):
        start = nums[i]
        while i + 1 < len(nums) and nums[i + 1] == nums[i] + 1:
            i += 1
        end = nums[i]
        if start == end:
            result.append(str(start))
        else:
            result.append(f"{start}->{end}")
        i += 1
    return result
