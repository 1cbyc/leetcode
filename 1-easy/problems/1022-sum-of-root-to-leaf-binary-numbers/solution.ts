function sumRootToLeaf(root: any): boolean | number | string | any {
  """
  :type root: TreeNode
  :rtype: int
  """
  M = 10**9 + 7
  def sumRootToLeafHelper(root, val):
      if (not root) {
          return 0;
      val = (val*2 + root.val) % M
      if (not root.left && not root.right) {
          return val;
      return (sumRootToLeafHelper(root.left, val) +;
              sumRootToLeafHelper(root.right, val)) % M

  return sumRootToLeafHelper(root, 0);
}

export { sumRootToLeaf };
