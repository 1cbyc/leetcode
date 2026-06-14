function checkTree(root: any): boolean | number | string | any {
  """
  :type root: Optional[TreeNode]
  :rtype: bool
  """
  return root.val == root.left.val+root.right.val;
}

export { checkTree };
