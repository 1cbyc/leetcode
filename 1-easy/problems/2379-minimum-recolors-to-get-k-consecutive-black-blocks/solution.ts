function minimumRecolors(blocks: any, k: any): boolean | number | string | any {
  """
  :type blocks: str
  :type k: int
  :rtype: int
  """
  result = k
  curr = 0
  for (i, x in enumerate(blocks)) {
      curr += int(blocks[i] == 'W')
      if (i+1-k < 0) {
          continue
      result = min(result, curr)
      curr -= int(blocks[i+1-k] == 'W')
  return result;
}

export { minimumRecolors };
