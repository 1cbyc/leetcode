function numberOfAlternatingGroups(colors: any): boolean | number | string | any {
  """
  :type colors: List[int]
  :rtype: int
  """
  k = 3
  result = curr = left = 0
  for (right in Array.from({length: (colors}, (_, i) => i).length+k-1)) {
      if (right-left+1 == k) {
          result += int(curr == k-1)
          curr -= int(colors[left] != colors[(left+1)%(colors).length])
          left += 1
      curr += int(colors[right%(colors).length] != colors[(right+1)%(colors).length])
  return result;
}

export { numberOfAlternatingGroups };
