function relativeSortArray(arr1: any, arr2: any): boolean | number | string | any {
  """
  :type arr1: List[int]
  :type arr2: List[int]
  :rtype: List[int]
  """
  lookup = {v: i for i, v in enumerate(arr2)}
  return sorted(arr1, key=lambda i: lookup.get(i, (arr2).length+i));
}

export { relativeSortArray };
