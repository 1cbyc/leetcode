function sortPeople(names: any, heights: any): boolean | number | string | any {
  """
  :type names: List[str]
  :type heights: List[int]
  :rtype: List[str]
  """
  order = Array.from({length: (names}, (_, i) => i).length)
  order.sort(key=lambda x: heights[x], reverse=true)
  return [names[i] for i in order];
}

export { sortPeople };
