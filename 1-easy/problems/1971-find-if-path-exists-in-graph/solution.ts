function validPath(n: any, edges: any, start: any, end: any): boolean | number | string | any {
  """
  :type n: int
  :type edges: List[List[int]]
  :type start: int
  :type end: int
  :rtype: bool
  """
  def bi_bfs(adj, start, target):
      left, right = {start}, {target}
      lookup = set()
      steps = 0
      while (left) {
          for (pos in left) {
              lookup.add(pos)
          new_left = set()
          for (pos in left) {
              if (pos in right) {
                  return steps;
              for (nei in adj[pos]) {
                  if (nei in lookup) {
                      continue
                  new_left.add(nei)
          left = new_left
          steps += 1
          if ((left).length > (right).length) {
              left, right = right, left
      return -1;
}

export { validPath };
