SOLUTIONS = {
  222: {
    "title": "Count Complete Tree Nodes",
    "slug": "count-complete-tree-nodes",
    "url": "https://leetcode.com/problems/count-complete-tree-nodes/",
    "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        def left_height(node):
            height = 0
            while node:
                height += 1
                node = node.left
            return height

        def right_height(node):
            height = 0
            while node:
                height += 1
                node = node.right
            return height

        if not root:
            return 0

        lh = left_height(root)
        rh = right_height(root)
        if lh == rh:
            return (1 << lh) - 1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
''',
    "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int countNodes(TreeNode* root) {
        if (!root) {
            return 0;
        }

        int leftHeight = getLeftHeight(root);
        int rightHeight = getRightHeight(root);
        if (leftHeight == rightHeight) {
            return (1 << leftHeight) - 1;
        }
        return 1 + countNodes(root->left) + countNodes(root->right);
    }

private:
    int getLeftHeight(TreeNode* node) {
        int height = 0;
        while (node) {
            height++;
            node = node->left;
        }
        return height;
    }

    int getRightHeight(TreeNode* node) {
        int height = 0;
        while (node) {
            height++;
            node = node->right;
        }
        return height;
    }
};''',
    "typescript": '''/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val)
 *         this.left = (left === undefined ? null : left)
 *         this.right = (right === undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
    const getLeftHeight = (node: TreeNode | null): number => {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    };

    const getRightHeight = (node: TreeNode | null): number => {
        let height = 0;
        while (node) {
            height++;
            node = node.right;
        }
        return height;
    };

    if (!root) {
        return 0;
    }

    const leftHeight = getLeftHeight(root);
    const rightHeight = getRightHeight(root);
    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
}'''
  },
  495: {
    "title": "Teemo Attacking",
    "slug": "teemo-attacking",
    "url": "https://leetcode.com/problems/teemo-attacking/",
    "python": '''class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        if not timeSeries:
            return 0

        total = 0
        for i in range(1, len(timeSeries)):
            total += min(duration, timeSeries[i] - timeSeries[i - 1])
        return total + duration
''',
    "cpp": '''class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        if (timeSeries.empty()) {
            return 0;
        }

        int total = 0;
        for (int i = 1; i < static_cast<int>(timeSeries.size()); i++) {
            total += min(duration, timeSeries[i] - timeSeries[i - 1]);
        }
        return total + duration;
    }
};''',
    "typescript": '''function findPoisonedDuration(timeSeries: number[], duration: number): number {
    if (timeSeries.length === 0) {
        return 0;
    }

    let total = 0;
    for (let i = 1; i < timeSeries.length; i++) {
        total += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
    }
    return total + duration;
}'''
  },
  501: {
    "title": "Find Mode in Binary Search Tree",
    "slug": "find-mode-in-binary-search-tree",
    "url": "https://leetcode.com/problems/find-mode-in-binary-search-tree/",
    "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        counts = {}

        def dfs(node):
            if not node:
                return
            counts[node.val] = counts.get(node.val, 0) + 1
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        max_count = max(counts.values())
        return [value for value, count in counts.items() if count == max_count]
''',
    "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> findMode(TreeNode* root) {
        unordered_map<int, int> counts;
        dfs(root, counts);

        int maxCount = 0;
        for (const auto& [value, count] : counts) {
            maxCount = max(maxCount, count);
        }

        vector<int> result;
        for (const auto& [value, count] : counts) {
            if (count == maxCount) {
                result.push_back(value);
            }
        }
        return result;
    }

private:
    void dfs(TreeNode* node, unordered_map<int, int>& counts) {
        if (!node) {
            return;
        }
        counts[node->val]++;
        dfs(node->left, counts);
        dfs(node->right, counts);
    }
};''',
    "typescript": '''/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val)
 *         this.left = (left === undefined ? null : left)
 *         this.right = (right === undefined ? null : right)
 *     }
 * }
 */

function findMode(root: TreeNode | null): number[] {
    const counts = new Map<number, number>();

    const dfs = (node: TreeNode | null): void => {
        if (!node) {
            return;
        }
        counts.set(node.val, (counts.get(node.val) ?? 0) + 1);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    let maxCount = 0;
    for (const count of counts.values()) {
        maxCount = Math.max(maxCount, count);
    }

    const result: number[] = [];
    for (const [value, count] of counts.entries()) {
        if (count === maxCount) {
            result.push(value);
        }
    }
    return result;
}'''
  },
  504: {
    "title": "Base 7",
    "slug": "base-7",
    "url": "https://leetcode.com/problems/base-7/",
    "python": '''class Solution:
    def convertToBase7(self, num: int) -> str:
        if num == 0:
            return "0"

        sign = "-" if num < 0 else ""
        num = abs(num)
        digits = []
        while num > 0:
            digits.append(str(num % 7))
            num //= 7
        return sign + "".join(reversed(digits))
''',
    "cpp": '''class Solution {
public:
    string convertToBase7(int num) {
        if (num == 0) {
            return "0";
        }

        string sign = num < 0 ? "-" : "";
        int value = abs(num);
        string digits;
        while (value > 0) {
            digits.push_back(static_cast<char>('0' + value % 7));
            value /= 7;
        }
        reverse(digits.begin(), digits.end());
        return sign + digits;
    }
};''',
    "typescript": '''function convertToBase7(num: number): string {
    if (num === 0) {
        return "0";
    }

    const sign = num < 0 ? "-" : "";
    let value = Math.abs(num);
    const digits: string[] = [];
    while (value > 0) {
        digits.push(String(value % 7));
        value = Math.floor(value / 7);
    }
    digits.reverse();
    return sign + digits.join("");
}'''
  },
  506: {
    "title": "Relative Ranks",
    "slug": "relative-ranks",
    "url": "https://leetcode.com/problems/relative-ranks/",
    "python": '''class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        order = sorted(range(len(score)), key=lambda i: -score[i])
        answer = [""] * len(score)
        medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]

        for rank, idx in enumerate(order):
            answer[idx] = medals[rank] if rank < 3 else str(rank + 1)
        return answer
''',
    "cpp": '''class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        vector<int> order(score.size());
        iota(order.begin(), order.end(), 0);
        sort(order.begin(), order.end(), [&](int a, int b) {
            return score[a] > score[b];
        });

        vector<string> result(score.size());
        for (int rank = 0; rank < static_cast<int>(order.size()); rank++) {
            int idx = order[rank];
            if (rank == 0) {
                result[idx] = "Gold Medal";
            } else if (rank == 1) {
                result[idx] = "Silver Medal";
            } else if (rank == 2) {
                result[idx] = "Bronze Medal";
            } else {
                result[idx] = to_string(rank + 1);
            }
        }
        return result;
    }
};''',
    "typescript": '''function findRelativeRanks(score: number[]): string[] {
    const order = score.map((_, index) => index).sort((a, b) => score[b] - score[a]);
    const result = new Array<string>(score.length);
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    for (let rank = 0; rank < order.length; rank++) {
        const idx = order[rank];
        result[idx] = rank < 3 ? medals[rank] : String(rank + 1);
    }
    return result;
}'''
  },
  507: {
    "title": "Perfect Number",
    "slug": "perfect-number",
    "url": "https://leetcode.com/problems/perfect-number/",
    "python": '''class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num <= 1:
            return False

        total = 1
        factor = 2
        while factor * factor <= num:
            if num % factor == 0:
                total += factor
                if factor * factor != num:
                    total += num // factor
            factor += 1
        return total == num
''',
    "cpp": '''class Solution {
public:
    bool checkPerfectNumber(int num) {
        if (num <= 1) {
            return false;
        }

        int total = 1;
        for (int factor = 2; factor * factor <= num; factor++) {
            if (num % factor == 0) {
                total += factor;
                if (factor * factor != num) {
                    total += num / factor;
                }
            }
        }
        return total == num;
    }
};''',
    "typescript": '''function checkPerfectNumber(num: number): boolean {
    if (num <= 1) {
        return false;
    }

    let total = 1;
    for (let factor = 2; factor * factor <= num; factor++) {
        if (num % factor === 0) {
            total += factor;
            if (factor * factor !== num) {
                total += Math.floor(num / factor);
            }
        }
    }
    return total === num;
}'''
  },
  509: {
    "title": "Fibonacci Number",
    "slug": "fibonacci-number",
    "url": "https://leetcode.com/problems/fibonacci-number/",
    "python": '''class Solution:
    def fib(self, n: int) -> int:
        if n < 2:
            return n

        a, b = 0, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b
''',
    "cpp": '''class Solution {
public:
    int fib(int n) {
        if (n < 2) {
            return n;
        }

        int a = 0;
        int b = 1;
        for (int i = 2; i <= n; i++) {
            int next = a + b;
            a = b;
            b = next;
        }
        return b;
    }
};''',
    "typescript": '''function fib(n: number): number {
    if (n < 2) {
        return n;
    }

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}'''
  },
  520: {
    "title": "Detect Capital",
    "slug": "detect-capital",
    "url": "https://leetcode.com/problems/detect-capital/",
    "python": '''class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        return word.isupper() or word.islower() or word[1:].islower()
''',
    "cpp": '''class Solution {
public:
    bool detectCapitalUse(string word) {
        bool allUpper = true;
        bool allLower = true;
        bool firstUpperRestLower = isupper(word[0]);

        for (int i = 0; i < static_cast<int>(word.size()); i++) {
            allUpper &= isupper(word[i]);
            allLower &= islower(word[i]);
            if (i > 0) {
                firstUpperRestLower &= islower(word[i]);
            }
        }

        return allUpper || allLower || firstUpperRestLower;
    }
};''',
    "typescript": '''function detectCapitalUse(word: string): boolean {
    return word === word.toUpperCase() ||
        word === word.toLowerCase() ||
        (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase());
}'''
  },
  521: {
    "title": "Longest Uncommon Subsequence I",
    "slug": "longest-uncommon-subsequence-i",
    "url": "https://leetcode.com/problems/longest-uncommon-subsequence-i/",
    "python": '''class Solution:
    def findLUSlength(self, a: str, b: str) -> int:
        return -1 if a == b else max(len(a), len(b))
''',
    "cpp": '''class Solution {
public:
    int findLUSlength(string a, string b) {
        return a == b ? -1 : max(a.size(), b.size());
    }
};''',
    "typescript": '''function findLUSlength(a: string, b: string): number {
    return a === b ? -1 : Math.max(a.length, b.length);
}'''
  },
  530: {
    "title": "Minimum Absolute Difference in BST",
    "slug": "minimum-absolute-difference-in-bst",
    "url": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
    "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        prev = None
        answer = float("inf")

        def inorder(node):
            nonlocal prev, answer
            if not node:
                return
            inorder(node.left)
            if prev is not None:
                answer = min(answer, node.val - prev)
            prev = node.val
            inorder(node.right)

        inorder(root)
        return answer
''',
    "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int getMinimumDifference(TreeNode* root) {
        prevSet = false;
        answer = INT_MAX;
        inorder(root);
        return answer;
    }

private:
    int prevValue;
    bool prevSet;
    int answer;

    void inorder(TreeNode* node) {
        if (!node) {
            return;
        }
        inorder(node->left);
        if (prevSet) {
            answer = min(answer, node->val - prevValue);
        }
        prevValue = node->val;
        prevSet = true;
        inorder(node->right);
    }
};''',
    "typescript": '''/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val)
 *         this.left = (left === undefined ? null : left)
 *         this.right = (right === undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
    let prev: number | null = null;
    let answer = Number.POSITIVE_INFINITY;

    const inorder = (node: TreeNode | null): void => {
        if (!node) {
            return;
        }
        inorder(node.left);
        if (prev !== null) {
            answer = Math.min(answer, node.val - prev);
        }
        prev = node.val;
        inorder(node.right);
    };

    inorder(root);
    return answer;
}'''
  },
  541: {
    "title": "Reverse String II",
    "slug": "reverse-string-ii",
    "url": "https://leetcode.com/problems/reverse-string-ii/",
    "python": '''class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        chars = list(s)
        for start in range(0, len(chars), 2 * k):
            chars[start:start + k] = reversed(chars[start:start + k])
        return "".join(chars)
''',
    "cpp": '''class Solution {
public:
    string reverseStr(string s, int k) {
        for (int start = 0; start < static_cast<int>(s.size()); start += 2 * k) {
            reverse(s.begin() + start, s.begin() + min(start + k, static_cast<int>(s.size())));
        }
        return s;
    }
};''',
    "typescript": '''function reverseStr(s: string, k: number): string {
    const chars = s.split("");
    for (let start = 0; start < chars.length; start += 2 * k) {
        let left = start;
        let right = Math.min(start + k - 1, chars.length - 1);
        while (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }
    return chars.join("");
}'''
  },
  543: {
    "title": "Diameter of Binary Tree",
    "slug": "diameter-of-binary-tree",
    "url": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter = 0

        def depth(node):
            nonlocal diameter
            if not node:
                return 0
            left = depth(node.left)
            right = depth(node.right)
            diameter = max(diameter, left + right)
            return 1 + max(left, right)

        depth(root)
        return diameter
''',
    "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        diameter = 0;
        depth(root);
        return diameter;
    }

private:
    int diameter;

    int depth(TreeNode* node) {
        if (!node) {
            return 0;
        }
        int left = depth(node->left);
        int right = depth(node->right);
        diameter = max(diameter, left + right);
        return 1 + max(left, right);
    }
};''',
    "typescript": '''/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val)
 *         this.left = (left === undefined ? null : left)
 *         this.right = (right === undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    const depth = (node: TreeNode | null): number => {
        if (!node) {
            return 0;
        }
        const left = depth(node.left);
        const right = depth(node.right);
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    };

    depth(root);
    return diameter;
}'''
  },
  551: {
    "title": "Student Attendance Record I",
    "slug": "student-attendance-record-i",
    "url": "https://leetcode.com/problems/student-attendance-record-i/",
    "python": '''class Solution:
    def checkRecord(self, s: str) -> bool:
        return s.count("A") < 2 and "LLL" not in s
''',
    "cpp": '''class Solution {
public:
    bool checkRecord(string s) {
        int absences = 0;
        int consecutiveLate = 0;

        for (char c : s) {
            if (c == 'A') {
                absences++;
                consecutiveLate = 0;
                if (absences >= 2) {
                    return false;
                }
            } else if (c == 'L') {
                consecutiveLate++;
                if (consecutiveLate >= 3) {
                    return false;
                }
            } else {
                consecutiveLate = 0;
            }
        }
        return true;
    }
};''',
    "typescript": '''function checkRecord(s: string): boolean {
    let absences = 0;
    let consecutiveLate = 0;

    for (const ch of s) {
        if (ch === "A") {
            absences++;
            consecutiveLate = 0;
            if (absences >= 2) {
                return false;
            }
        } else if (ch === "L") {
            consecutiveLate++;
            if (consecutiveLate >= 3) {
                return false;
            }
        } else {
            consecutiveLate = 0;
        }
    }
    return true;
}'''
  },
  557: {
    "title": "Reverse Words in a String III",
    "slug": "reverse-words-in-a-string-iii",
    "url": "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
    "python": '''class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(word[::-1] for word in s.split(" "))
''',
    "cpp": '''class Solution {
public:
    string reverseWords(string s) {
        stringstream stream(s);
        string word;
        string result;

        while (stream >> word) {
            reverse(word.begin(), word.end());
            if (!result.empty()) {
                result += ' ';
            }
            result += word;
        }
        return result;
    }
};''',
    "typescript": '''function reverseWords(s: string): string {
    return s
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}'''
  },
  559: {
    "title": "Maximum Depth of N-ary Tree",
    "slug": "maximum-depth-of-n-ary-tree",
    "url": "https://leetcode.com/problems/maximum-depth-of-n-ary-tree/",
    "python": '''"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""
class Solution:
    def maxDepth(self, root: 'Node') -> int:
        if not root:
            return 0
        if not root.children:
            return 1
        return 1 + max(self.maxDepth(child) for child in root.children)
''',
    "cpp": '''/* 
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
public:
    int maxDepth(Node* root) {
        if (!root) {
            return 0;
        }

        int childDepth = 0;
        for (Node* child : root->children) {
            childDepth = max(childDepth, maxDepth(child));
        }
        return 1 + childDepth;
    }
};''',
    "typescript": '''/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function maxDepth(root: _Node | null): number {
    if (!root) {
        return 0;
    }

    let childDepth = 0;
    for (const child of root.children) {
        childDepth = Math.max(childDepth, maxDepth(child));
    }
    return 1 + childDepth;
}'''
  },
  561: {
    "title": "Array Partition",
    "slug": "array-partition",
    "url": "https://leetcode.com/problems/array-partition/",
    "python": '''class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        return sum(nums[::2])
''',
    "cpp": '''class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int total = 0;
        for (int i = 0; i < static_cast<int>(nums.size()); i += 2) {
            total += nums[i];
        }
        return total;
    }
};''',
    "typescript": '''function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < nums.length; i += 2) {
        total += nums[i];
    }
    return total;
}'''
  },
  563: {
    "title": "Binary Tree Tilt",
    "slug": "binary-tree-tilt",
    "url": "https://leetcode.com/problems/binary-tree-tilt/",
    "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTilt(self, root: Optional[TreeNode]) -> int:
        total_tilt = 0

        def subtree_sum(node):
            nonlocal total_tilt
            if not node:
                return 0
            left = subtree_sum(node.left)
            right = subtree_sum(node.right)
            total_tilt += abs(left - right)
            return node.val + left + right

        subtree_sum(root)
        return total_tilt
''',
    "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int findTilt(TreeNode* root) {
        totalTilt = 0;
        subtreeSum(root);
        return totalTilt;
    }

private:
    int totalTilt;

    int subtreeSum(TreeNode* node) {
        if (!node) {
            return 0;
        }
        int left = subtreeSum(node->left);
        int right = subtreeSum(node->right);
        totalTilt += abs(left - right);
        return node->val + left + right;
    }
};''',
    "typescript": '''/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val)
 *         this.left = (left === undefined ? null : left)
 *         this.right = (right === undefined ? null : right)
 *     }
 * }
 */

function findTilt(root: TreeNode | null): number {
    let totalTilt = 0;

    const subtreeSum = (node: TreeNode | null): number => {
        if (!node) {
            return 0;
        }
        const left = subtreeSum(node.left);
        const right = subtreeSum(node.right);
        totalTilt += Math.abs(left - right);
        return node.val + left + right;
    };

    subtreeSum(root);
    return totalTilt;
}'''
  },
  566: {
    "title": "Reshape the Matrix",
    "slug": "reshape-the-matrix",
    "url": "https://leetcode.com/problems/reshape-the-matrix/",
    "python": '''class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        rows = len(mat)
        cols = len(mat[0])
        if rows * cols != r * c:
            return mat

        flattened = [value for row in mat for value in row]
        return [flattened[i:i + c] for i in range(0, len(flattened), c)]
''',
    "cpp": '''class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int rows = mat.size();
        int cols = mat[0].size();
        if (rows * cols != r * c) {
            return mat;
        }

        vector<vector<int>> result(r, vector<int>(c));
        for (int index = 0; index < rows * cols; index++) {
            result[index / c][index % c] = mat[index / cols][index % cols];
        }
        return result;
    }
};''',
    "typescript": '''function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const rows = mat.length;
    const cols = mat[0].length;
    if (rows * cols !== r * c) {
        return mat;
    }

    const result = Array.from({ length: r }, () => new Array<number>(c));
    for (let index = 0; index < rows * cols; index++) {
        result[Math.floor(index / c)][index % c] = mat[Math.floor(index / cols)][index % cols];
    }
    return result;
}'''
  },
  572: {
    "title": "Subtree of Another Tree",
    "slug": "subtree-of-another-tree",
    "url": "https://leetcode.com/problems/subtree-of-another-tree/",
    "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def same_tree(a, b):
            if not a and not b:
                return True
            if not a or not b:
                return False
            return a.val == b.val and same_tree(a.left, b.left) and same_tree(a.right, b.right)

        if not subRoot:
            return True
        if not root:
            return False
        return same_tree(root, subRoot) or self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
''',
    "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        if (!subRoot) {
            return true;
        }
        if (!root) {
            return false;
        }
        return sameTree(root, subRoot) || isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
    }

private:
    bool sameTree(TreeNode* a, TreeNode* b) {
        if (!a && !b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return a->val == b->val && sameTree(a->left, b->left) && sameTree(a->right, b->right);
    }
};''',
    "typescript": '''/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val)
 *         this.left = (left === undefined ? null : left)
 *         this.right = (right === undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const sameTree = (a: TreeNode | null, b: TreeNode | null): boolean => {
        if (!a && !b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return a.val === b.val && sameTree(a.left, b.left) && sameTree(a.right, b.right);
    };

    if (!subRoot) {
        return true;
    }
    if (!root) {
        return false;
    }
    return sameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}'''
  },
  575: {
    "title": "Distribute Candies",
    "slug": "distribute-candies",
    "url": "https://leetcode.com/problems/distribute-candies/",
    "python": '''class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        return min(len(set(candyType)), len(candyType) // 2)
''',
    "cpp": '''class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        unordered_set<int> uniqueTypes(candyType.begin(), candyType.end());
        return min(static_cast<int>(uniqueTypes.size()), static_cast<int>(candyType.size() / 2));
    }
};''',
    "typescript": '''function distributeCandies(candyType: number[]): number {
    return Math.min(new Set(candyType).size, Math.floor(candyType.length / 2));
}'''
  }
}
