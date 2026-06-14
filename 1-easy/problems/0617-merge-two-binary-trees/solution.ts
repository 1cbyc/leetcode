function mergeTrees(t1: any, t2: any): boolean | number | string | any {
  """
  :type t1: TreeNode
  :type t2: TreeNode
  :rtype: TreeNode
  """
  if (t1 is null) {
      return t2;
  if (t2 is null) {
      return t1;
  t1.val += t2.val
  t1.left = self.mergeTrees(t1.left, t2.left)
  t1.right = self.mergeTrees(t1.right, t2.right)
  return t1;
}

export { mergeTrees };
