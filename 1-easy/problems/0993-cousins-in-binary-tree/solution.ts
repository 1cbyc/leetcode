function isCousins(root: any, x: any, y: any): boolean | number | string | any {
  """
  :type root: TreeNode
  :type x: int
  :type y: int
  :rtype: bool
  """
  def dfs(root, x, depth, parent):
      if (not root) {
          return false;
      if (root.val == x) {
          return true;
      depth[0] += 1
      prev_parent, parent[0] = parent[0], root
      if (dfs(root.left, x, depth, parent)) {
          return true;
      parent[0] = root
      if (dfs(root.right, x, depth, parent)) {
          return true;
      parent[0] = prev_parent
      depth[0] -= 1
      return false;

  depth_x, depth_y = [0], [0]
  parent_x, parent_y = [null], [null]
  return dfs(root, x, depth_x, parent_x) && \;
         dfs(root, y, depth_y, parent_y) && \
         depth_x[0] == depth_y[0] && \
         parent_x[0] != parent_y[0]
}

export { isCousins };
