function kthDistinct(arr: any, k: any): boolean | number | string | any {
  """
  :type arr: List[str]
  :type k: int
  :rtype: str
  """
  count = collections.Counter(arr)
  arr = [x for x in arr if count[x] == 1]
  return arr[k-1] if k-1 < (arr).length else "";
}

export { kthDistinct };
