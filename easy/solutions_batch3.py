SOLUTIONS = {
  202: {
    "title": "Happy Number",
    "slug": "happy-number",
    "url": "https://leetcode.com/problems/happy-number/",
    "python": '''def isHappy(n: int) -> bool:
    def get_next(number):
        total_sum = 0
        while number > 0:
            digit = number % 10
            total_sum += digit * digit
            number //= 10
        return total_sum

    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = get_next(n)
    return n == 1
''',
    "cpp": '''class Solution {
public:
    bool isHappy(int n) {
        unordered_set<int> seen;
        while (n != 1 && seen.find(n) == seen.end()) {
            seen.insert(n);
            n = getNext(n);
        }
        return n == 1;
    }

private:
    int getNext(int n) {
        int totalSum = 0;
        while (n > 0) {
            int digit = n % 10;
            totalSum += digit * digit;
            n /= 10;
        }
        return totalSum;
    }
};
''',
    "typescript": '''function isHappy(n: number): boolean {
    const getNext = (num: number): number => {
        let totalSum = 0;
        while (num > 0) {
            const digit = num % 10;
            totalSum += digit * digit;
            num = Math.floor(num / 10);
        }
        return totalSum;
    };

    const seen = new Set<number>();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    return n === 1;
}
'''
  },
  203: {
    "title": "Remove Linked List Elements",
    "slug": "remove-linked-list-elements",
    "url": "https://leetcode.com/problems/remove-linked-list-elements/",
    "python": '''class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeElements(head: ListNode, val: int) -> ListNode:
    dummy = ListNode(0)
    dummy.next = head
    current = dummy

    while current.next:
        if current.next.val == val:
            current.next = current.next.next
        else:
            current = current.next

    return dummy.next
''',
    "cpp": '''class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* current = dummy;

        while (current->next) {
            if (current->next->val == val) {
                current->next = current->next->next;
            } else {
                current = current->next;
            }
        }

        return dummy->next;
    }
};
''',
    "typescript": '''class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
}
'''
  },
  205: {
    "title": "Isomorphic Strings",
    "slug": "isomorphic-strings",
    "url": "https://leetcode.com/problems/isomorphic-strings/",
    "python": '''def isIsomorphic(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    s_to_t = {}
    t_to_s = {}

    for char_s, char_t in zip(s, t):
        if char_s in s_to_t:
            if s_to_t[char_s] != char_t:
                return False
        else:
            s_to_t[char_s] = char_t

        if char_t in t_to_s:
            if t_to_s[char_t] != char_s:
                return False
        else:
            t_to_s[char_t] = char_s

    return True
''',
    "cpp": '''class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;

        unordered_map<char, char> sToT;
        unordered_map<char, char> tToS;

        for (int i = 0; i < s.length(); i++) {
            char charS = s[i];
            char charT = t[i];

            if (sToT.count(charS)) {
                if (sToT[charS] != charT) return false;
            } else {
                sToT[charS] = charT;
            }

            if (tToS.count(charT)) {
                if (tToS[charT] != charS) return false;
            } else {
                tToS[charT] = charS;
            }
        }

        return true;
    }
};
''',
    "typescript": '''function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sToT = new Map<string, string>();
    const tToS = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (sToT.has(charS)) {
            if (sToT.get(charS) !== charT) return false;
        } else {
            sToT.set(charS, charT);
        }

        if (tToS.has(charT)) {
            if (tToS.get(charT) !== charS) return false;
        } else {
            tToS.set(charT, charS);
        }
    }

    return true;
}
'''
  },
  206: {
    "title": "Reverse Linked List",
    "slug": "reverse-linked-list",
    "url": "https://leetcode.com/problems/reverse-linked-list/",
    "python": '''class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head: ListNode) -> ListNode:
    prev = None
    current = head

    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp

    return prev
''',
    "cpp": '''class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* current = head;

        while (current) {
            ListNode* nextTemp = current->next;
            current->next = prev;
            prev = current;
            current = nextTemp;
        }

        return prev;
    }
};
''',
    "typescript": '''class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current = head;

    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}
'''
  },
  217: {
    "title": "Contains Duplicate",
    "slug": "contains-duplicate",
    "url": "https://leetcode.com/problems/contains-duplicate/",
    "python": '''def containsDuplicate(nums: list[int]) -> bool:
    return len(nums) != len(set(nums))
''',
    "cpp": '''class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;
        for (int num : nums) {
            if (seen.count(num)) {
                return true;
            }
            seen.insert(num);
        }
        return false;
    }
};
''',
    "typescript": '''function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
'''
  },
  219: {
    "title": "Contains Duplicate II",
    "slug": "contains-duplicate-ii",
    "url": "https://leetcode.com/problems/contains-duplicate-ii/",
    "python": '''def containsNearbyDuplicate(nums: list[int], k: int) -> bool:
    seen = set()
    for i in range(len(nums)):
        if nums[i] in seen:
            return True
        seen.add(nums[i])
        if len(seen) > k:
            seen.remove(nums[i - k])
    return False
''',
    "cpp": '''class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_set<int> seen;
        for (int i = 0; i < nums.size(); i++) {
            if (seen.count(nums[i])) {
                return true;
            }
            seen.insert(nums[i]);
            if (seen.size() > k) {
                seen.erase(nums[i - k]);
            }
        }
        return false;
    }
};
''',
    "typescript": '''function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const seen = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
        if (seen.size > k) {
            seen.delete(nums[i - k]);
        }
    }
    return false;
}
'''
  },
  225: {
    "title": "Implement Stack using Queues",
    "slug": "implement-stack-using-queues",
    "url": "https://leetcode.com/problems/implement-stack-using-queues/",
    "python": '''from collections import deque

class MyStack:
    def __init__(self):
        self.queue = deque()

    def push(self, x: int) -> None:
        self.queue.append(x)
        for _ in range(len(self.queue) - 1):
            self.queue.append(self.queue.popleft())

    def pop(self) -> int:
        return self.queue.popleft()

    def top(self) -> int:
        return self.queue[0]

    def empty(self) -> bool:
        return len(self.queue) == 0
''',
    "cpp": '''class MyStack {
private:
    queue<int> q;
public:
    MyStack() {}

    void push(int x) {
        q.push(x);
        for (int i = 0; i < q.size() - 1; i++) {
            q.push(q.front());
            q.pop();
        }
    }

    int pop() {
        int top = q.front();
        q.pop();
        return top;
    }

    int top() {
        return q.front();
    }

    bool empty() {
        return q.empty();
    }
};
''',
    "typescript": '''class MyStack {
    private queue: number[] = [];

    push(x: number): void {
        this.queue.push(x);
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift()!);
        }
    }

    pop(): number {
        return this.queue.shift()!;
    }

    top(): number {
        return this.queue[0];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}
'''
  },
  226: {
    "title": "Invert Binary Tree",
    "slug": "invert-binary-tree",
    "url": "https://leetcode.com/problems/invert-binary-tree/",
    "python": '''class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invertTree(root: TreeNode) -> TreeNode:
    if not root:
        return None

    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)

    return root
''',
    "cpp": '''class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return nullptr;

        swap(root->left, root->right);
        invertTree(root->left);
        invertTree(root->right);

        return root;
    }
};
''',
    "typescript": '''class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);

    return root;
}
'''
  },
  228: {
    "title": "Summary Ranges",
    "slug": "summary-ranges",
    "url": "https://leetcode.com/problems/summary-ranges/",
    "python": '''def summaryRanges(nums: list[int]) -> list[str]:
    result = []
    i = 0
    while i < len(nums):
        start = nums[i]
        while i + 1 < len(nums) and nums[i + 1] == nums[i] + 1:
            i += 1
        end = nums[i]
        if start == end:
            result.append(str(start))
        else:
            result.append(f"{start}->{end}")
        i += 1
    return result
''',
    "cpp": '''class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        vector<string> result;
        int i = 0;
        while (i < nums.size()) {
            long long start = nums[i];
            while (i + 1 < nums.size() && (long long)nums[i + 1] == nums[i] + 1) {
                i++;
            }
            long long end = nums[i];
            if (start == end) {
                result.push_back(to_string(start));
            } else {
                result.push_back(to_string(start) + "->" + to_string(end));
            }
            i++;
        }
        return result;
    }
};
''',
    "typescript": '''function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    let i = 0;
    while (i < nums.length) {
        const start = nums[i];
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        const end = nums[i];
        if (start === end) {
            result.push(String(start));
        } else {
            result.push(`${start}->${end}`);
        }
        i++;
    }
    return result;
}
'''
  },
  231: {
    "title": "Power of Two",
    "slug": "power-of-two",
    "url": "https://leetcode.com/problems/power-of-two/",
    "python": '''def isPowerOfTwo(n: int) -> bool:
    return n > 0 and (n & (n - 1)) == 0
''',
    "cpp": '''class Solution {
public:
    bool isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
};
''',
    "typescript": '''function isPowerOfTwo(n: number): boolean {
    return n > 0 && (n & (n - 1)) === 0;
}
'''
  },
  232: {
    "title": "Implement Queue using Stacks",
    "slug": "implement-queue-using-stacks",
    "url": "https://leetcode.com/problems/implement-queue-using-stacks/",
    "python": '''class MyQueue:
    def __init__(self):
        self.stack_in = []
        self.stack_out = []

    def push(self, x: int) -> None:
        self.stack_in.append(x)

    def pop(self) -> int:
        self.peek()
        return self.stack_out.pop()

    def peek(self) -> int:
        if not self.stack_out:
            while self.stack_in:
                self.stack_out.append(self.stack_in.pop())
        return self.stack_out[-1]

    def empty(self) -> bool:
        return len(self.stack_in) == 0 and len(self.stack_out) == 0
''',
    "cpp": '''class MyQueue {
private:
    stack<int> stackIn;
    stack<int> stackOut;
public:
    MyQueue() {}

    void push(int x) {
        stackIn.push(x);
    }

    int pop() {
        peek();
        int top = stackOut.top();
        stackOut.pop();
        return top;
    }

    int peek() {
        if (stackOut.empty()) {
            while (!stackIn.empty()) {
                stackOut.push(stackIn.top());
                stackIn.pop();
            }
        }
        return stackOut.top();
    }

    bool empty() {
        return stackIn.empty() && stackOut.empty();
    }
};
''',
    "typescript": '''class MyQueue {
    private stackIn: number[] = [];
    private stackOut: number[] = [];

    push(x: number): void {
        this.stackIn.push(x);
    }

    pop(): number {
        this.peek();
        return this.stackOut.pop()!;
    }

    peek(): number {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop()!);
            }
        }
        return this.stackOut[this.stackOut.length - 1];
    }

    empty(): boolean {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }
}
'''
  },
  234: {
    "title": "Palindrome Linked List",
    "slug": "palindrome-linked-list",
    "url": "https://leetcode.com/problems/palindrome-linked-list/",
    "python": '''class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def isPalindrome(head: ListNode) -> bool:
    if not head or not head.next:
        return True

    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    prev = None
    while slow:
        next_temp = slow.next
        slow.next = prev
        prev = slow
        slow = next_temp

    while prev:
        if prev.val != head.val:
            return False
        prev = prev.next
        head = head.next

    return True
''',
    "cpp": '''class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if (!head || !head->next) return true;

        ListNode* slow = head;
        ListNode* fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }

        ListNode* prev = nullptr;
        while (slow) {
            ListNode* nextTemp = slow->next;
            slow->next = prev;
            prev = slow;
            slow = nextTemp;
        }

        while (prev) {
            if (prev->val != head->val) return false;
            prev = prev->next;
            head = head->next;
        }

        return true;
    }
};
''',
    "typescript": '''class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    while (slow) {
        const nextTemp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }

    while (prev) {
        if (prev.val !== head!.val) return false;
        prev = prev.next;
        head = head!.next;
    }

    return true;
}
'''
  },
  235: {
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "slug": "lowest-common-ancestor-of-a-binary-search-tree",
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "python": '''class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root
''',
    "cpp": '''class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        while (root) {
            if (p->val < root->val && q->val < root->val) {
                root = root->left;
            } else if (p->val > root->val && q->val > root->val) {
                root = root->right;
            } else {
                return root;
            }
        }
        return nullptr;
    }
};
''',
    "typescript": '''class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    while (root) {
        if (p!.val < root.val && q!.val < root.val) {
            root = root.left;
        } else if (p!.val > root.val && q!.val > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
}
'''
  },
  237: {
    "title": "Delete Node in a Linked List",
    "slug": "delete-node-in-a-linked-list",
    "url": "https://leetcode.com/problems/delete-node-in-a-linked-list/",
    "python": '''class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def deleteNode(node):
    node.val = node.next.val
    node.next = node.next.next
''',
    "cpp": '''class Solution {
public:
    void deleteNode(ListNode* node) {
        node->val = node->next->val;
        node->next = node->next->next;
    }
};
''',
    "typescript": '''class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteNode(node: ListNode): void {
    node.val = node.next!.val;
    node.next = node.next!.next;
}
'''
  },
  242: {
    "title": "Valid Anagram",
    "slug": "valid-anagram",
    "url": "https://leetcode.com/problems/valid-anagram/",
    "python": '''def isAnagram(s: str, t: str) -> bool:
    return sorted(s) == sorted(t)
''',
    "cpp": '''class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;
        sort(s.begin(), s.end());
        sort(t.begin(), t.end());
        return s == t;
    }
};
''',
    "typescript": '''function isAnagram(s: string, t: string): boolean {
    return s.split('').sort().join('') === t.split('').sort().join('');
}
'''
  },
  257: {
    "title": "Binary Tree Paths",
    "slug": "binary-tree-paths",
    "url": "https://leetcode.com/problems/binary-tree-paths/",
    "python": '''class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def binaryTreePaths(root: TreeNode) -> list[str]:
    result = []

    def dfs(node, path):
        if not node:
            return
        path += str(node.val)
        if not node.left and not node.right:
            result.append(path)
        else:
            if node.left:
                dfs(node.left, path + "->")
            if node.right:
                dfs(node.right, path + "->")

    dfs(root, "")
    return result
''',
    "cpp": '''class Solution {
public:
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> result;
        string path = "";
        dfs(root, path, result);
        return result;
    }

private:
    void dfs(TreeNode* node, string path, vector<string>& result) {
        if (!node) return;
        path += to_string(node->val);
        if (!node->left && !node->right) {
            result.push_back(path);
        } else {
            if (node->left) dfs(node->left, path + "->", result);
            if (node->right) dfs(node->right, path + "->", result);
        }
    }
};
''',
    "typescript": '''class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];

    const dfs = (node: TreeNode | null, path: string): void => {
        if (!node) return;
        path += node.val;
        if (!node.left && !node.right) {
            result.push(path);
        } else {
            if (node.left) dfs(node.left, path + "->");
            if (node.right) dfs(node.right, path + "->");
        }
    };

    dfs(root, "");
    return result;
}
'''
  },
  258: {
    "title": "Add Digits",
    "slug": "add-digits",
    "url": "https://leetcode.com/problems/add-digits/",
    "python": '''def addDigits(num: int) -> int:
    return 1 + (num - 1) % 9 if num > 0 else 0
''',
    "cpp": '''class Solution {
public:
    int addDigits(int num) {
        return num == 0 ? 0 : 1 + (num - 1) % 9;
    }
};
''',
    "typescript": '''function addDigits(num: number): number {
    return num === 0 ? 0 : 1 + ((num - 1) % 9);
}
'''
  },
  263: {
    "title": "Ugly Number",
    "slug": "ugly-number",
    "url": "https://leetcode.com/problems/ugly-number/",
    "python": '''def isUgly(n: int) -> bool:
    if n <= 0:
        return False
    for factor in [2, 3, 5]:
        while n % factor == 0:
            n //= factor
    return n == 1
''',
    "cpp": '''class Solution {
public:
    bool isUgly(int n) {
        if (n <= 0) return false;
        for (int factor : {2, 3, 5}) {
            while (n % factor == 0) {
                n /= factor;
            }
        }
        return n == 1;
    }
};
''',
    "typescript": '''function isUgly(n: number): boolean {
    if (n <= 0) return false;
    for (const factor of [2, 3, 5]) {
        while (n % factor === 0) {
            n /= factor;
        }
    }
    return n === 1;
}
'''
  },
  268: {
    "title": "Missing Number",
    "slug": "missing-number",
    "url": "https://leetcode.com/problems/missing-number/",
    "python": '''def missingNumber(nums: list[int]) -> int:
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum
''',
    "cpp": '''class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        long long expectedSum = (long long)n * (n + 1) / 2;
        long long actualSum = 0;
        for (int num : nums) {
            actualSum += num;
        }
        return expectedSum - actualSum;
    }
};
''',
    "typescript": '''function missingNumber(nums: number[]): number {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}
'''
  },
  278: {
    "title": "First Bad Version",
    "slug": "first-bad-version",
    "url": "https://leetcode.com/problems/first-bad-version/",
    "python": '''def isBadVersion(version):
    pass

def firstBadVersion(n):
    left, right = 1, n
    while left < right:
        mid = (left + right) // 2
        if isBadVersion(mid):
            right = mid
        else:
            left = mid + 1
    return left
''',
    "cpp": '''class Solution {
public:
    int firstBadVersion(int n) {
        int left = 1, right = n;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
};
''',
    "typescript": '''function solution(isBadVersion: (version: number) => boolean) {
    return function(n: number): number {
        let left = 1, right = n;
        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
}
'''
  },
  283: {
    "title": "Move Zeroes",
    "slug": "move-zeroes",
    "url": "https://leetcode.com/problems/move-zeroes/",
    "python": '''def moveZeroes(nums: list[int]) -> None:
    j = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[j], nums[i] = nums[i], nums[j]
            j += 1
''',
    "cpp": '''class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int j = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != 0) {
                swap(nums[i], nums[j]);
                j++;
            }
        }
    }
};
''',
    "typescript": '''function moveZeroes(nums: number[]): void {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
}
'''
  },
  290: {
    "title": "Word Pattern",
    "slug": "word-pattern",
    "url": "https://leetcode.com/problems/word-pattern/",
    "python": '''def wordPattern(pattern: str, s: str) -> bool:
    words = s.split()
    if len(pattern) != len(words):
        return False

    char_to_word = {}
    word_to_char = {}

    for char, word in zip(pattern, words):
        if char in char_to_word:
            if char_to_word[char] != word:
                return False
        else:
            char_to_word[char] = word

        if word in word_to_char:
            if word_to_char[word] != char:
                return False
        else:
            word_to_char[word] = char

    return True
''',
    "cpp": '''class Solution {
public:
    bool wordPattern(string pattern, string s) {
        vector<string> words;
        stringstream ss(s);
        string word;
        while (ss >> word) {
            words.push_back(word);
        }

        if (pattern.length() != words.size()) return false;

        unordered_map<char, string> charToWord;
        unordered_map<string, char> wordToChar;

        for (int i = 0; i < pattern.length(); i++) {
            char ch = pattern[i];
            string w = words[i];

            if (charToWord.count(ch)) {
                if (charToWord[ch] != w) return false;
            } else {
                charToWord[ch] = w;
            }

            if (wordToChar.count(w)) {
                if (wordToChar[w] != ch) return false;
            } else {
                wordToChar[w] = ch;
            }
        }

        return true;
    }
};
''',
    "typescript": '''function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const charToWord = new Map<string, string>();
    const wordToChar = new Map<string, string>();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (charToWord.has(char)) {
            if (charToWord.get(char) !== word) return false;
        } else {
            charToWord.set(char, word);
        }

        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== char) return false;
        } else {
            wordToChar.set(word, char);
        }
    }

    return true;
}
'''
  },
  292: {
    "title": "Nim Game",
    "slug": "nim-game",
    "url": "https://leetcode.com/problems/nim-game/",
    "python": '''def canWinNim(n: int) -> bool:
    return n % 4 != 0
''',
    "cpp": '''class Solution {
public:
    bool canWinNim(int n) {
        return n % 4 != 0;
    }
};
''',
    "typescript": '''function canWinNim(n: number): boolean {
    return n % 4 !== 0;
}
'''
  },
  303: {
    "title": "Range Sum Query - Immutable",
    "slug": "range-sum-query-immutable",
    "url": "https://leetcode.com/problems/range-sum-query-immutable/",
    "python": '''class NumArray:
    def __init__(self, nums: list[int]):
        self.prefix = [0]
        for num in nums:
            self.prefix.append(self.prefix[-1] + num)

    def sumRange(self, left: int, right: int) -> int:
        return self.prefix[right + 1] - self.prefix[left]
''',
    "cpp": '''class NumArray {
private:
    vector<int> prefix;
public:
    NumArray(vector<int>& nums) {
        prefix.push_back(0);
        for (int num : nums) {
            prefix.push_back(prefix.back() + num);
        }
    }

    int sumRange(int left, int right) {
        return prefix[right + 1] - prefix[left];
    }
};
''',
    "typescript": '''class NumArray {
    private prefix: number[];

    constructor(nums: number[]) {
        this.prefix = [0];
        for (const num of nums) {
            this.prefix.push(this.prefix[this.prefix.length - 1] + num);
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefix[right + 1] - this.prefix[left];
    }
}
'''
  },
  326: {
    "title": "Power of Three",
    "slug": "power-of-three",
    "url": "https://leetcode.com/problems/power-of-three/",
    "python": '''def isPowerOfThree(n: int) -> bool:
    if n <= 0:
        return False
    while n % 3 == 0:
        n //= 3
    return n == 1
''',
    "cpp": '''class Solution {
public:
    bool isPowerOfThree(int n) {
        if (n <= 0) return false;
        while (n % 3 == 0) {
            n /= 3;
        }
        return n == 1;
    }
};
''',
    "typescript": '''function isPowerOfThree(n: number): boolean {
    if (n <= 0) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
}
'''
  },
  338: {
    "title": "Counting Bits",
    "slug": "counting-bits",
    "url": "https://leetcode.com/problems/counting-bits/",
    "python": '''def countBits(n: int) -> list[int]:
    result = [0] * (n + 1)
    for i in range(1, n + 1):
        result[i] = result[i >> 1] + (i & 1)
    return result
''',
    "cpp": '''class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> result(n + 1, 0);
        for (int i = 1; i <= n; i++) {
            result[i] = result[i >> 1] + (i & 1);
        }
        return result;
    }
};
''',
    "typescript": '''function countBits(n: number): number[] {
    const result = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
}
'''
  },
  342: {
    "title": "Power of Four",
    "slug": "power-of-four",
    "url": "https://leetcode.com/problems/power-of-four/",
    "python": '''def isPowerOfFour(n: int) -> bool:
    return n > 0 and (n & (n - 1)) == 0 and (n - 1) % 3 == 0
''',
    "cpp": '''class Solution {
public:
    bool isPowerOfFour(int n) {
        return n > 0 && (n & (n - 1)) == 0 && (n - 1) % 3 == 0;
    }
};
''',
    "typescript": '''function isPowerOfFour(n: number): boolean {
    return n > 0 && (n & (n - 1)) === 0 && (n - 1) % 3 === 0;
}
'''
  }
}
