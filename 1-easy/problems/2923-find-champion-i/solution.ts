function findChampion(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: int
  """
  return next(u for u in Array.from({length: (grid}, (_, i) => i).length) if sum(grid[u]) == (grid).length-1);
}

export { findChampion };
