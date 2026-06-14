function findCenter(edges: any): boolean | number | string | any {
  """
  :type edges: List[List[int]]
  :rtype: int
  """
  return edges[0][edges[0][1] in edges[1]];
}

export { findCenter };
