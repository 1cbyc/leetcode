from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def checkTree(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: bool
        """
        return root.val == root.left.val+root.right.val
