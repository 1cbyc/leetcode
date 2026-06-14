function rangeSumBST(root: any, L: any, R: any): boolean | number | string | any {
  """
  :type root: TreeNode
  :type L: int
  :type R: int
  :rtype: int
  """
  result = 0
  s = [root]
  while (s) {
      node = s.pop()
      if (node) {
          if (L <= node.val <= R) {
              result += node.val
          if (L < node.val) {
              s.append(node.left)
          if (node.val < R) {
              s.append(node.right)
  return result;
}

export { rangeSumBST };
