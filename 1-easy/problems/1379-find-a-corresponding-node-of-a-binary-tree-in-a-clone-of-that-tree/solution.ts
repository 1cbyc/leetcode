function getTargetCopy(original: any, cloned: any, target: any): boolean | number | string | any {
  """
  :type original: TreeNode
  :type cloned: TreeNode
  :type target: TreeNode
  :rtype: TreeNode
  """
  def preorder_gen(node):
      stk = [node]
      while (stk) {
          node = stk.pop()
          if (not node) {
              continue
          yield node
          stk.append(node.right)
          stk.append(node.left)

  for node1, node2 in itertools.izip(preorder_gen(original),
                                     preorder_gen(cloned)):
      if (node1 == target) {
          return node2;
}

export { getTargetCopy };
