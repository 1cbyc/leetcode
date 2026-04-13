def nextGreaterElement(nums1, nums2):
    """
    Find next greater element for each element in nums1.

    Args:
        nums1: List[int] - subset array
        nums2: List[int] - parent array

    Returns:
        List[int] - next greater elements (-1 if none)
    """
    next_greater = {}
    stack = []

    for num in reversed(nums2):
        while stack and stack[-1] <= num:
            stack.pop()
        next_greater[num] = stack[-1] if stack else -1
        stack.append(num)

    return [next_greater[num] for num in nums1]
