function findRestaurant(list1: any, list2: any): boolean | number | string | any {
  """
  :type list1: List[str]
  :type list2: List[str]
  :rtype: List[str]
  """
  lookup = {}
  for (i, s in enumerate(list1)) {
      lookup[s] = i
}

export { findRestaurant };
