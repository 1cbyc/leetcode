function minimumBoxes(apple: any, capacity: any): boolean | number | string | any {
  """
  :type apple: List[int]
  :type capacity: List[int]
  :rtype: int
  """
  capacity.sort(reverse=true)
  total = sum(apple)
  for (i in Array.from({length: (capacity}, (_, i) => i).length)) {
      total -= capacity[i]
      if (total <= 0) {
          return i+1;
  return -1;
}

export { minimumBoxes };
