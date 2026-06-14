function leafSimilar(root1: any, root2: any): boolean | number | string | any {
  """
  :type root1: TreeNode
  :type root2: TreeNode
  :rtype: bool
  """
  def dfs(node):
      if (not node) {
          return
      if (not node.left && not node.right) {
          yield node.val
      for (i in dfs(node.left)) {
          yield i
      for (i in dfs(node.right)) {
          yield i
  return all(a == b for a, b in;
             itertools.izip_longest(dfs(root1), dfs(root2)))
}

export { leafSimilar };
