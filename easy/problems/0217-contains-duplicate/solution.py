def containsDuplicate(nums: list[int]) -> bool:
    return len(nums) != len(set(nums))
