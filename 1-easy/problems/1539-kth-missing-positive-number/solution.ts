function findKthPositive(arr: any, k: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :type k: int
  :rtype: int
  """
  def check(arr, k, x):
      return arr[x]-(x+1) < k;
}

export { findKthPositive };
