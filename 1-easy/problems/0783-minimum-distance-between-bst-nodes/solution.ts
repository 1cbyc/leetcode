function minDiffInBST(root: any): boolean | number | string | any {
  """
  :type root: TreeNode
  :rtype: int
  """
  def dfs(node):
      if (not node) {
          return
      dfs(node.left)
      self.result = min(self.result, node.val-self.prev)
      self.prev = node.val
      dfs(node.right)
}

export { minDiffInBST };
