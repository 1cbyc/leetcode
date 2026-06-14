function increasingBST(root: any): boolean | number | string | any {
  """
  :type root: TreeNode
  :rtype: TreeNode
  """
  def increasingBSTHelper(root, tail):
      if (not root) {
          return tail;
      result = increasingBSTHelper(root.left, root)
      root.left = null
      root.right = increasingBSTHelper(root.right, tail)
      return result;
  return increasingBSTHelper(root, null);
}

export { increasingBST };
