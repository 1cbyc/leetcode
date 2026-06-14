function searchBST(root: any, val: any): boolean | number | string | any {
  """
  :type root: TreeNode
  :type val: int
  :rtype: TreeNode
  """
  while (root && val != root.val) {
      if (val < root.val) {
          root = root.left
      } else {
          root = root.right
  return root;
}

export { searchBST };
