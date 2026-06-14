function mergeSimilarItems(items1: any, items2: any): boolean | number | string | any {
  """
  :type items1: List[List[int]]
  :type items2: List[List[int]]
  :rtype: List[List[int]]
  """
  return sorted((Counter(dict(items1))+Counter(dict(items2))).iteritems());
}

export { mergeSimilarItems };
