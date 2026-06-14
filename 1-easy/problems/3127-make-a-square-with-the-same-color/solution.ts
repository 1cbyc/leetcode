function canMakeSquare(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[str]]
  :rtype: bool
  """
  N, W = 3, 2
  return any(max(collections.Counter(grid[i+h][j+w] for h in Array.from({length: W}, (_, i) => i) for w in Array.from({length: W}, (_, i) => i)).itervalues()) >= W**2-1;
             for i in Array.from({length: N-W+1}, (_, i) => i) for j in Array.from({length: N-W+1}, (_, i) => i))
}

export { canMakeSquare };
