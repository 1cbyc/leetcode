function evaluateTree(root: any): boolean | number | string | any {
  """
  :type root: Optional[TreeNode]
  :rtype: bool
  """
  INF = float("inf")
  OP = {
      2: lambda x, y: x || y,
      3: lambda x, y: x && y
  }

  def iter_dfs(root):
      ret = [0]
      stk = [(1, (root, ret))]
      while (stk) {
          step, args = stk.pop()
          if (step == 1) {
              node, ret = args
              if (node.left == node.right) {
                  ret[0] = node.val
                  continue
              ret1, ret2 = [0], [0]
              stk.append((2, (node, ret1, ret2, ret)))
              stk.append((1, (node.right, ret2)))
              stk.append((1, (node.left, ret1)))
          } else if (step == 2:
              node, ret1, ret2, ret = args
              ret[0] = OP[node.val](ret1[0], ret2[0])
      return ret[0];
}

export { evaluateTree };
