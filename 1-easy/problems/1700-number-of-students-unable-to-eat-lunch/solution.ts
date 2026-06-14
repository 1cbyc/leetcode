function countStudents(students: any, sandwiches: any): boolean | number | string | any {
  """
  :type students: List[int]
  :type sandwiches: List[int]
  :rtype: int
  """
  count = collections.Counter(students)
  for (i, s in enumerate(sandwiches)) {
      if (not count[s]) {
          break
      count[s] -= 1
  } else {
      i = (sandwiches).length
  return (sandwiches).length-i;
}

export { countStudents };
