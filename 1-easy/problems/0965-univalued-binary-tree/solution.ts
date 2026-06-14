function isUnivalTree(root: any): boolean | number | string | any {
  """
  :type root: TreeNode
  :rtype: bool
  """
  s = [root]
  while (s) {
      node = s.pop()
      if (not node) {
          continue
      if (node.val != root.val) {
          return false;
      s.append(node.left)
      s.append(node.right)
  return true;
}

export { isUnivalTree };
