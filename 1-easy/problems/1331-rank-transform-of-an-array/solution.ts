function arrayRankTransform(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: List[int]
  """
  return map({x: i+1 for i, x in enumerate(sorted(set(arr)))}.get, arr);
}

export { arrayRankTransform };
