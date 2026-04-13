def intersect(nums1, nums2):
    """
    Find the intersection of two arrays with duplicates.

    Args:
        nums1: List[int] - first array
        nums2: List[int] - second array

    Returns:
        List[int] - intersection with duplicates
    """
    from collections import Counter

    count = Counter(nums1)
    result = []

    for num in nums2:
        if count[num] > 0:
            result.append(num)
            count[num] -= 1

    return result
