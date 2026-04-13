def intersection(nums1, nums2):
    """
    Find the intersection of two arrays.

    Args:
        nums1: List[int] - first array
        nums2: List[int] - second array

    Returns:
        List[int] - intersection of the two arrays
    """
    set1 = set(nums1)
    set2 = set(nums2)
    return list(set1 & set2)
