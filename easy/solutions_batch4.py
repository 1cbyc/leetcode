SOLUTIONS = {
  344: {
    "title": "Reverse String",
    "slug": "reverse-string",
    "url": "https://leetcode.com/problems/reverse-string/",
    "python": '''def reverseString(s):
    """
    Reverse a string in-place using two pointers.

    Args:
        s: List[str] - list of characters

    Returns:
        None (modifies s in-place)
    """
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1''',
    "cpp": '''class Solution {
public:
    void reverseString(vector<char>& s) {
        int left = 0, right = s.size() - 1;
        while (left < right) {
            swap(s[left], s[right]);
            left++;
            right--;
        }
    }
};''',
    "typescript": '''function reverseString(s: string[]): void {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}'''
  },
  345: {
    "title": "Reverse Vowels of a String",
    "slug": "reverse-vowels-of-a-string",
    "url": "https://leetcode.com/problems/reverse-vowels-of-a-string/",
    "python": '''def reverseVowels(s):
    """
    Reverse only the vowels in a string.

    Args:
        s: str - input string

    Returns:
        str - string with vowels reversed
    """
    vowels = set('aeiouAEIOU')
    s_list = list(s)
    left, right = 0, len(s_list) - 1

    while left < right:
        while left < right and s_list[left] not in vowels:
            left += 1
        while left < right and s_list[right] not in vowels:
            right -= 1
        s_list[left], s_list[right] = s_list[right], s_list[left]
        left += 1
        right -= 1

    return ''.join(s_list)''',
    "cpp": '''class Solution {
public:
    string reverseVowels(string s) {
        string vowels = "aeiouAEIOU";
        int left = 0, right = s.size() - 1;

        while (left < right) {
            while (left < right && vowels.find(s[left]) == string::npos) {
                left++;
            }
            while (left < right && vowels.find(s[right]) == string::npos) {
                right--;
            }
            swap(s[left], s[right]);
            left++;
            right--;
        }

        return s;
    }
};''',
    "typescript": '''function reverseVowels(s: string): string {
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split('');
    let left = 0, right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('');
}'''
  },
  349: {
    "title": "Intersection of Two Arrays",
    "slug": "intersection-of-two-arrays",
    "url": "https://leetcode.com/problems/intersection-of-two-arrays/",
    "python": '''def intersection(nums1, nums2):
    """
    Find the intersection of two arrays.

    Args:
        nums1: List[int] - first array
        nums2: List[int] - second array

    Returns:
        List[int] - intersection of the two arrays
    """
    set1 = set(nums1)
    set2 = set(nums2)
    return list(set1 & set2)''',
    "cpp": '''class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> set1(nums1.begin(), nums1.end());
        vector<int> result;

        for (int num : nums2) {
            if (set1.find(num) != set1.end()) {
                result.push_back(num);
                set1.erase(num);
            }
        }

        return result;
    }
};''',
    "typescript": '''function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const result: number[] = [];

    for (const num of nums2) {
        if (set1.has(num)) {
            result.push(num);
            set1.delete(num);
        }
    }

    return result;
}'''
  },
  350: {
    "title": "Intersection of Two Arrays II",
    "slug": "intersection-of-two-arrays-ii",
    "url": "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
    "python": '''def intersect(nums1, nums2):
    """
    Find the intersection of two arrays with duplicates.

    Args:
        nums1: List[int] - first array
        nums2: List[int] - second array

    Returns:
        List[int] - intersection with duplicates
    """
    from collections import Counter

    count = Counter(nums1)
    result = []

    for num in nums2:
        if count[num] > 0:
            result.append(num)
            count[num] -= 1

    return result''',
    "cpp": '''class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> count;
        vector<int> result;

        for (int num : nums1) {
            count[num]++;
        }

        for (int num : nums2) {
            if (count[num] > 0) {
                result.push_back(num);
                count[num]--;
            }
        }

        return result;
    }
};''',
    "typescript": '''function intersect(nums1: number[], nums2: number[]): number[] {
    const count = new Map<number, number>();

    for (const num of nums1) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const result: number[] = [];
    for (const num of nums2) {
        if (count.has(num) && count.get(num)! > 0) {
            result.push(num);
            count.set(num, count.get(num)! - 1);
        }
    }

    return result;
}'''
  },
  367: {
    "title": "Valid Perfect Square",
    "slug": "valid-perfect-square",
    "url": "https://leetcode.com/problems/valid-perfect-square/",
    "python": '''def isPerfectSquare(num):
    """
    Determine if a number is a perfect square.

    Args:
        num: int - the number to check

    Returns:
        bool - true if num is a perfect square
    """
    if num < 1:
        return False

    left, right = 1, num
    while left <= right:
        mid = (left + right) // 2
        square = mid * mid

        if square == num:
            return True
        elif square < num:
            left = mid + 1
        else:
            right = mid - 1

    return False''',
    "cpp": '''class Solution {
public:
    bool isPerfectSquare(int num) {
        if (num < 1) return false;

        long left = 1, right = num;
        while (left <= right) {
            long mid = (left + right) / 2;
            long square = mid * mid;

            if (square == num) {
                return true;
            } else if (square < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
};''',
    "typescript": '''function isPerfectSquare(num: number): boolean {
    if (num < 1) return false;

    let left = 1, right = num;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === num) {
            return true;
        } else if (square < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}'''
  },
  374: {
    "title": "Guess Number Higher or Lower",
    "slug": "guess-number-higher-or-lower",
    "url": "https://leetcode.com/problems/guess-number-higher-or-lower/",
    "python": '''def guessNumber(n):
    """
    Binary search to find the guessed number.
    Uses the guess(x) API function provided by LeetCode.

    Args:
        n: int - upper bound of range

    Returns:
        int - the guessed number
    """
    left, right = 1, n

    while left <= right:
        mid = (left + right) // 2
        result = guess(mid)

        if result == 0:
            return mid
        elif result == -1:
            right = mid - 1
        else:
            left = mid + 1''',
    "cpp": '''class Solution : public GuessGame {
public:
    int guessNumber(int n) {
        int left = 1, right = n;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int result = guess(mid);

            if (result == 0) {
                return mid;
            } else if (result == -1) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }
};''',
    "typescript": '''function guessNumber(n: number): number {
    let left = 1, right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const result = guess(mid);

        if (result === 0) {
            return mid;
        } else if (result === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}'''
  },
  383: {
    "title": "Ransom Note",
    "slug": "ransom-note",
    "url": "https://leetcode.com/problems/ransom-note/",
    "python": '''def canConstruct(ransomNote, magazine):
    """
    Determine if ransomNote can be constructed from magazine.

    Args:
        ransomNote: str - the target note
        magazine: str - the source of characters

    Returns:
        bool - true if ransomNote can be constructed
    """
    from collections import Counter

    ransom_count = Counter(ransomNote)
    magazine_count = Counter(magazine)

    for char, count in ransom_count.items():
        if magazine_count[char] < count:
            return False

    return True''',
    "cpp": '''class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char, int> count;

        for (char c : magazine) {
            count[c]++;
        }

        for (char c : ransomNote) {
            if (count[c] <= 0) {
                return false;
            }
            count[c]--;
        }

        return true;
    }
};''',
    "typescript": '''function canConstruct(ransomNote: string, magazine: string): boolean {
    const count = new Map<string, number>();

    for (const char of magazine) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        if ((count.get(char) || 0) <= 0) {
            return false;
        }
        count.set(char, count.get(char)! - 1);
    }

    return true;
}'''
  },
  387: {
    "title": "First Unique Character in a String",
    "slug": "first-unique-character-in-a-string",
    "url": "https://leetcode.com/problems/first-unique-character-in-a-string/",
    "python": '''def firstUniqChar(s):
    """
    Find the first unique character in a string.

    Args:
        s: str - input string

    Returns:
        int - index of first unique character, -1 if none
    """
    from collections import Counter

    char_count = Counter(s)

    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i

    return -1''',
    "cpp": '''class Solution {
public:
    int firstUniqChar(string s) {
        unordered_map<char, int> count;

        for (char c : s) {
            count[c]++;
        }

        for (int i = 0; i < s.length(); i++) {
            if (count[s[i]] == 1) {
                return i;
            }
        }

        return -1;
    }
};''',
    "typescript": '''function firstUniqChar(s: string): number {
    const count = new Map<string, number>();

    for (const char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}'''
  },
  389: {
    "title": "Find the Difference",
    "slug": "find-the-difference",
    "url": "https://leetcode.com/problems/find-the-difference/",
    "python": '''def findTheDifference(s, t):
    """
    Find the extra character in string t that's not in s.

    Args:
        s: str - original string
        t: str - string with one extra character

    Returns:
        str - the extra character
    """
    result = 0

    for char in s:
        result ^= ord(char)

    for char in t:
        result ^= ord(char)

    return chr(result)''',
    "cpp": '''class Solution {
public:
    char findTheDifference(string s, string t) {
        int result = 0;

        for (char c : s) {
            result ^= c;
        }

        for (char c : t) {
            result ^= c;
        }

        return (char)result;
    }
};''',
    "typescript": '''function findTheDifference(s: string, t: string): string {
    let result = 0;

    for (const char of s) {
        result ^= char.charCodeAt(0);
    }

    for (const char of t) {
        result ^= char.charCodeAt(0);
    }

    return String.fromCharCode(result);
}'''
  },
  392: {
    "title": "Is Subsequence",
    "slug": "is-subsequence",
    "url": "https://leetcode.com/problems/is-subsequence/",
    "python": '''def isSubsequence(s, t):
    """
    Check if s is a subsequence of t.

    Args:
        s: str - potential subsequence
        t: str - string to check against

    Returns:
        bool - true if s is a subsequence of t
    """
    s_idx = 0

    for char in t:
        if s_idx < len(s) and char == s[s_idx]:
            s_idx += 1

    return s_idx == len(s)''',
    "cpp": '''class Solution {
public:
    bool isSubsequence(string s, string t) {
        int s_idx = 0;

        for (char c : t) {
            if (s_idx < s.length() && c == s[s_idx]) {
                s_idx++;
            }
        }

        return s_idx == s.length();
    }
};''',
    "typescript": '''function isSubsequence(s: string, t: string): boolean {
    let sIdx = 0;

    for (const char of t) {
        if (sIdx < s.length && char === s[sIdx]) {
            sIdx++;
        }
    }

    return sIdx === s.length;
}'''
  },
  401: {
    "title": "Binary Watch",
    "slug": "binary-watch",
    "url": "https://leetcode.com/problems/binary-watch/",
    "python": '''def readBinaryWatch(num):
    """
    Display times on a binary watch based on number of lit LEDs.

    Args:
        num: int - number of lit LEDs

    Returns:
        List[str] - all possible times
    """
    result = []

    for h in range(12):
        for m in range(60):
            if bin(h).count('1') + bin(m).count('1') == num:
                result.append(f"{h}:{m:02d}")

    return result''',
    "cpp": '''class Solution {
public:
    vector<string> readBinaryWatch(int num) {
        vector<string> result;

        for (int h = 0; h < 12; h++) {
            for (int m = 0; m < 60; m++) {
                if (__builtin_popcount(h) + __builtin_popcount(m) == num) {
                    char time[6];
                    sprintf(time, "%d:%02d", h, m);
                    result.push_back(string(time));
                }
            }
        }

        return result;
    }
};''',
    "typescript": '''function readBinaryWatch(num: number): string[] {
    const result: string[] = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const bitCount = (h.toString(2).match(/1/g) || []).length +
                           (m.toString(2).match(/1/g) || []).length;
            if (bitCount === num) {
                result.push(`${h}:${String(m).padStart(2, '0')}`);
            }
        }
    }

    return result;
}'''
  },
  404: {
    "title": "Sum of Left Leaves",
    "slug": "sum-of-left-leaves",
    "url": "https://leetcode.com/problems/sum-of-left-leaves/",
    "python": '''def sumOfLeftLeaves(root):
    """
    Sum all left leaf nodes in a binary tree.

    Args:
        root: TreeNode - root of the binary tree

    Returns:
        int - sum of all left leaves
    """
    def dfs(node, is_left):
        if not node:
            return 0

        if not node.left and not node.right and is_left:
            return node.val

        return dfs(node.left, True) + dfs(node.right, False)

    return dfs(root, False)''',
    "cpp": '''class Solution {
public:
    int sumOfLeftLeaves(TreeNode* root) {
        return dfs(root, false);
    }

private:
    int dfs(TreeNode* node, bool isLeft) {
        if (!node) return 0;

        if (!node->left && !node->right && isLeft) {
            return node->val;
        }

        return dfs(node->left, true) + dfs(node->right, false);
    }
};''',
    "typescript": '''function sumOfLeftLeaves(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, isLeft: boolean): number {
        if (!node) return 0;

        if (!node.left && !node.right && isLeft) {
            return node.val;
        }

        return dfs(node.left, true) + dfs(node.right, false);
    }

    return dfs(root, false);
}'''
  },
  405: {
    "title": "Convert a Number to Hexadecimal",
    "slug": "convert-a-number-to-hexadecimal",
    "url": "https://leetcode.com/problems/convert-a-number-to-hexadecimal/",
    "python": '''def toHex(num):
    """
    Convert an integer to its hexadecimal representation.

    Args:
        num: int - the number to convert

    Returns:
        str - hexadecimal representation
    """
    if num == 0:
        return "0"

    hex_chars = "0123456789abcdef"
    result = ""

    # Handle negative numbers using 32-bit representation
    if num < 0:
        num = (1 << 32) + num

    while num:
        result = hex_chars[num % 16] + result
        num //= 16

    return result''',
    "cpp": '''class Solution {
public:
    string toHex(int num) {
        if (num == 0) return "0";

        string hex_chars = "0123456789abcdef";
        string result = "";

        unsigned int n = (unsigned int)num;

        while (n) {
            result = hex_chars[n % 16] + result;
            n /= 16;
        }

        return result;
    }
};''',
    "typescript": '''function toHex(num: number): string {
    if (num === 0) return "0";

    const hexChars = "0123456789abcdef";
    let result = "";

    const n = num >>> 0;
    let temp = n;

    while (temp) {
        result = hexChars[temp % 16] + result;
        temp = Math.floor(temp / 16);
    }

    return result;
}'''
  },
  409: {
    "title": "Longest Palindrome",
    "slug": "longest-palindrome",
    "url": "https://leetcode.com/problems/longest-palindrome/",
    "python": '''def longestPalindrome(s):
    """
    Find the length of the longest palindrome that can be built.

    Args:
        s: str - input string

    Returns:
        int - length of longest palindrome
    """
    from collections import Counter

    char_count = Counter(s)
    length = 0
    has_odd = False

    for count in char_count.values():
        length += (count // 2) * 2
        if count % 2 == 1:
            has_odd = True

    return length + (1 if has_odd else 0)''',
    "cpp": '''class Solution {
public:
    int longestPalindrome(string s) {
        unordered_map<char, int> count;

        for (char c : s) {
            count[c]++;
        }

        int length = 0;
        bool has_odd = false;

        for (auto& p : count) {
            length += (p.second / 2) * 2;
            if (p.second % 2 == 1) {
                has_odd = true;
            }
        }

        return length + (has_odd ? 1 : 0);
    }
};''',
    "typescript": '''function longestPalindrome(s: string): number {
    const count = new Map<string, number>();

    for (const char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (const cnt of count.values()) {
        length += Math.floor(cnt / 2) * 2;
        if (cnt % 2 === 1) {
            hasOdd = true;
        }
    }

    return length + (hasOdd ? 1 : 0);
}'''
  },
  412: {
    "title": "Fizz Buzz",
    "slug": "fizz-buzz",
    "url": "https://leetcode.com/problems/fizz-buzz/",
    "python": '''def fizzBuzz(n):
    """
    Return a list of fizz buzz results.

    Args:
        n: int - upper bound (inclusive)

    Returns:
        List[str] - fizz buzz result
    """
    result = []

    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))

    return result''',
    "cpp": '''class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> result;

        for (int i = 1; i <= n; i++) {
            if (i % 15 == 0) {
                result.push_back("FizzBuzz");
            } else if (i % 3 == 0) {
                result.push_back("Fizz");
            } else if (i % 5 == 0) {
                result.push_back("Buzz");
            } else {
                result.push_back(to_string(i));
            }
        }

        return result;
    }
};''',
    "typescript": '''function fizzBuzz(n: number): string[] {
    const result: string[] = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
}'''
  },
  414: {
    "title": "Third Maximum Number",
    "slug": "third-maximum-number",
    "url": "https://leetcode.com/problems/third-maximum-number/",
    "python": '''def thirdMax(nums):
    """
    Find the third maximum number in an array.

    Args:
        nums: List[int] - input array

    Returns:
        int - third maximum or maximum if less than 3 unique numbers
    """
    unique_nums = list(set(nums))

    if len(unique_nums) < 3:
        return max(unique_nums)

    unique_nums.sort(reverse=True)
    return unique_nums[2]''',
    "cpp": '''class Solution {
public:
    int thirdMax(vector<int>& nums) {
        set<int> unique_nums(nums.begin(), nums.end());

        if (unique_nums.size() < 3) {
            return *unique_nums.rbegin();
        }

        int count = 0;
        for (auto it = unique_nums.rbegin(); it != unique_nums.rend(); ++it) {
            if (++count == 3) {
                return *it;
            }
        }

        return -1;
    }
};''',
    "typescript": '''function thirdMax(nums: number[]): number {
    const unique = new Set(nums);

    if (unique.size < 3) {
        return Math.max(...unique);
    }

    const sorted = Array.from(unique).sort((a, b) => b - a);
    return sorted[2];
}'''
  },
  415: {
    "title": "Add Strings",
    "slug": "add-strings",
    "url": "https://leetcode.com/problems/add-strings/",
    "python": '''def addStrings(num1, num2):
    """
    Add two non-negative integer strings.

    Args:
        num1: str - first number as string
        num2: str - second number as string

    Returns:
        str - sum as string
    """
    result = []
    carry = 0
    i, j = len(num1) - 1, len(num2) - 1

    while i >= 0 or j >= 0 or carry:
        n1 = int(num1[i]) if i >= 0 else 0
        n2 = int(num2[j]) if j >= 0 else 0

        total = n1 + n2 + carry
        result.append(str(total % 10))
        carry = total // 10

        i -= 1
        j -= 1

    return ''.join(reversed(result))''',
    "cpp": '''class Solution {
public:
    string addStrings(string num1, string num2) {
        string result = "";
        int carry = 0;
        int i = num1.length() - 1;
        int j = num2.length() - 1;

        while (i >= 0 || j >= 0 || carry) {
            int n1 = i >= 0 ? num1[i] - '0' : 0;
            int n2 = j >= 0 ? num2[j] - '0' : 0;

            int total = n1 + n2 + carry;
            result = char((total % 10) + '0') + result;
            carry = total / 10;

            i--;
            j--;
        }

        return result;
    }
};''',
    "typescript": '''function addStrings(num1: string, num2: string): string {
    let result = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const n1 = i >= 0 ? parseInt(num1[i]) : 0;
        const n2 = j >= 0 ? parseInt(num2[j]) : 0;

        const total = n1 + n2 + carry;
        result = String(total % 10) + result;
        carry = Math.floor(total / 10);

        i--;
        j--;
    }

    return result;
}'''
  },
  434: {
    "title": "Number of Segments in a String",
    "slug": "number-of-segments-in-a-string",
    "url": "https://leetcode.com/problems/number-of-segments-in-a-string/",
    "python": '''def countSegments(s):
    """
    Count the number of segments (words) in a string.

    Args:
        s: str - input string

    Returns:
        int - number of segments
    """
    return len(s.split())''',
    "cpp": '''class Solution {
public:
    int countSegments(string s) {
        int count = 0;
        int i = 0;
        int n = s.length();

        while (i < n) {
            while (i < n && s[i] == ' ') {
                i++;
            }
            if (i < n) {
                count++;
                while (i < n && s[i] != ' ') {
                    i++;
                }
            }
        }

        return count;
    }
};''',
    "typescript": '''function countSegments(s: string): number {
    return s.split(/\s+/).filter(segment => segment.length > 0).length;
}'''
  },
  441: {
    "title": "Arranging Coins",
    "slug": "arranging-coins",
    "url": "https://leetcode.com/problems/arranging-coins/",
    "python": '''def arrangeCoins(n):
    """
    Determine how many complete stairs can be built with n coins.

    Args:
        n: int - number of coins

    Returns:
        int - number of complete stairs
    """
    left, right = 0, n

    while left <= right:
        mid = (left + right) // 2
        cost = mid * (mid + 1) // 2

        if cost == n:
            return mid
        elif cost < n:
            left = mid + 1
        else:
            right = mid - 1

    return right''',
    "cpp": '''class Solution {
public:
    int arrangeCoins(int n) {
        long left = 0, right = n;

        while (left <= right) {
            long mid = (left + right) / 2;
            long cost = mid * (mid + 1) / 2;

            if (cost == n) {
                return mid;
            } else if (cost < n) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return right;
    }
};''',
    "typescript": '''function arrangeCoins(n: number): number {
    let left = 0, right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const cost = (mid * (mid + 1)) / 2;

        if (cost === n) {
            return mid;
        } else if (cost < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}'''
  },
  448: {
    "title": "Find All Numbers Disappeared in an Array",
    "slug": "find-all-numbers-disappeared-in-an-array",
    "url": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    "python": '''def findDisappearedNumbers(nums):
    """
    Find all numbers that disappeared in an array of 1 to n.

    Args:
        nums: List[int] - array with numbers 1 to n

    Returns:
        List[int] - disappeared numbers
    """
    for num in nums:
        index = abs(num) - 1
        nums[index] = -abs(nums[index])

    result = []
    for i, num in enumerate(nums):
        if num > 0:
            result.append(i + 1)

    return result''',
    "cpp": '''class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        for (int num : nums) {
            int index = abs(num) - 1;
            nums[index] = -abs(nums[index]);
        }

        vector<int> result;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > 0) {
                result.push_back(i + 1);
            }
        }

        return result;
    }
};''',
    "typescript": '''function findDisappearedNumbers(nums: number[]): number[] {
    for (const num of nums) {
        const index = Math.abs(num) - 1;
        nums[index] = -Math.abs(nums[index]);
    }

    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}'''
  },
  455: {
    "title": "Assign Cookies",
    "slug": "assign-cookies",
    "url": "https://leetcode.com/problems/assign-cookies/",
    "python": '''def findContentChildren(g, s):
    """
    Assign cookies to maximize content children.

    Args:
        g: List[int] - greed factors of children
        s: List[int] - sizes of cookies

    Returns:
        int - number of content children
    """
    g.sort()
    s.sort()

    child = 0
    cookie = 0

    while child < len(g) and cookie < len(s):
        if s[cookie] >= g[child]:
            child += 1
        cookie += 1

    return child''',
    "cpp": '''class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        sort(g.begin(), g.end());
        sort(s.begin(), s.end());

        int child = 0, cookie = 0;

        while (child < g.size() && cookie < s.size()) {
            if (s[cookie] >= g[child]) {
                child++;
            }
            cookie++;
        }

        return child;
    }
};''',
    "typescript": '''function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let child = 0, cookie = 0;

    while (child < g.length && cookie < s.length) {
        if (s[cookie] >= g[child]) {
            child++;
        }
        cookie++;
    }

    return child;
}'''
  },
  459: {
    "title": "Repeated Substring Pattern",
    "slug": "repeated-substring-pattern",
    "url": "https://leetcode.com/problems/repeated-substring-pattern/",
    "python": '''def repeatedSubstringPattern(s):
    """
    Check if a string is composed of a repeated substring.

    Args:
        s: str - input string

    Returns:
        bool - true if composed of repeated substring
    """
    return s in (s + s)[1:-1]''',
    "cpp": '''class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        string doubled = s + s;
        return doubled.substr(1, 2 * s.length() - 2).find(s) != string::npos;
    }
};''',
    "typescript": '''function repeatedSubstringPattern(s: string): boolean {
    const doubled = s + s;
    return doubled.substring(1, 2 * s.length - 1).includes(s);
}'''
  },
  461: {
    "title": "Hamming Distance",
    "slug": "hamming-distance",
    "url": "https://leetcode.com/problems/hamming-distance/",
    "python": '''def hammingDistance(x, y):
    """
    Calculate the hamming distance between two integers.

    Args:
        x: int - first number
        y: int - second number

    Returns:
        int - hamming distance (number of differing bits)
    """
    xor = x ^ y
    return bin(xor).count('1')''',
    "cpp": '''class Solution {
public:
    int hammingDistance(int x, int y) {
        int xor_val = x ^ y;
        return __builtin_popcount(xor_val);
    }
};''',
    "typescript": '''function hammingDistance(x: number, y: number): number {
    const xor = x ^ y;
    return (xor.toString(2).match(/1/g) || []).length;
}'''
  },
  463: {
    "title": "Island Perimeter",
    "slug": "island-perimeter",
    "url": "https://leetcode.com/problems/island-perimeter/",
    "python": '''def islandPerimeter(grid):
    """
    Calculate the perimeter of an island in a grid.

    Args:
        grid: List[List[int]] - grid with 1s (land) and 0s (water)

    Returns:
        int - perimeter of the island
    """
    perimeter = 0

    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 1:
                perimeter += 4

                if i > 0 and grid[i-1][j] == 1:
                    perimeter -= 2
                if j > 0 and grid[i][j-1] == 1:
                    perimeter -= 2

    return perimeter''',
    "cpp": '''class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int perimeter = 0;

        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[0].size(); j++) {
                if (grid[i][j] == 1) {
                    perimeter += 4;

                    if (i > 0 && grid[i-1][j] == 1) {
                        perimeter -= 2;
                    }
                    if (j > 0 && grid[i][j-1] == 1) {
                        perimeter -= 2;
                    }
                }
            }
        }

        return perimeter;
    }
};''',
    "typescript": '''function islandPerimeter(grid: number[][]): number {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;

                if (i > 0 && grid[i-1][j] === 1) {
                    perimeter -= 2;
                }
                if (j > 0 && grid[i][j-1] === 1) {
                    perimeter -= 2;
                }
            }
        }
    }

    return perimeter;
}'''
  },
  476: {
    "title": "Number Complement",
    "slug": "number-complement",
    "url": "https://leetcode.com/problems/number-complement/",
    "python": '''def findComplement(num):
    """
    Find the complement of a number (flip all bits).

    Args:
        num: int - input number

    Returns:
        int - complement of the number
    """
    mask = num
    mask |= mask >> 1
    mask |= mask >> 2
    mask |= mask >> 4
    mask |= mask >> 8
    mask |= mask >> 16

    return num ^ mask''',
    "cpp": '''class Solution {
public:
    int findComplement(int num) {
        int mask = num;
        mask |= mask >> 1;
        mask |= mask >> 2;
        mask |= mask >> 4;
        mask |= mask >> 8;
        mask |= mask >> 16;

        return num ^ mask;
    }
};''',
    "typescript": '''function findComplement(num: number): number {
    let mask = num;
    mask |= mask >> 1;
    mask |= mask >> 2;
    mask |= mask >> 4;
    mask |= mask >> 8;
    mask |= mask >> 16;

    return num ^ mask;
}'''
  },
  482: {
    "title": "License Key Formatting",
    "slug": "license-key-formatting",
    "url": "https://leetcode.com/problems/license-key-formatting/",
    "python": '''def licenseKeyFormatting(S, K):
    """
    Format a license key with dashes.

    Args:
        S: str - license key string
        K: int - characters between dashes

    Returns:
        str - formatted license key
    """
    cleaned = S.replace('-', '').upper()

    if not cleaned:
        return ""

    result = []
    for i in range(len(cleaned) - 1, -1, -1):
        if len(result) > 0 and len(result) % (K + 1) == K:
            result.append('-')
        result.append(cleaned[i])

    return ''.join(reversed(result))''',
    "cpp": '''class Solution {
public:
    string licenseKeyFormatting(string S, int K) {
        string cleaned = "";
        for (char c : S) {
            if (c != '-') {
                cleaned += toupper(c);
            }
        }

        if (cleaned.empty()) return "";

        string result = "";
        int count = 0;
        for (int i = cleaned.length() - 1; i >= 0; i--) {
            if (count == K) {
                result = "-" + result;
                count = 0;
            }
            result = cleaned[i] + result;
            count++;
        }

        return result;
    }
};''',
    "typescript": '''function licenseKeyFormatting(S: string, K: number): string {
    const cleaned = S.replace(/-/g, '').toUpperCase();

    if (cleaned.length === 0) return "";

    const result: string[] = [];
    for (let i = cleaned.length - 1; i >= 0; i--) {
        if (result.length > 0 && result.length % (K + 1) === K) {
            result.push('-');
        }
        result.push(cleaned[i]);
    }

    return result.reverse().join('');
}'''
  },
  485: {
    "title": "Max Consecutive Ones",
    "slug": "max-consecutive-ones",
    "url": "https://leetcode.com/problems/max-consecutive-ones/",
    "python": '''def findMaxConsecutiveOnes(nums):
    """
    Find the maximum number of consecutive 1s in an array.

    Args:
        nums: List[int] - array of 0s and 1s

    Returns:
        int - maximum consecutive 1s
    """
    max_count = 0
    current_count = 0

    for num in nums:
        if num == 1:
            current_count += 1
            max_count = max(max_count, current_count)
        else:
            current_count = 0

    return max_count''',
    "cpp": '''class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int max_count = 0, current_count = 0;

        for (int num : nums) {
            if (num == 1) {
                current_count++;
                max_count = max(max_count, current_count);
            } else {
                current_count = 0;
            }
        }

        return max_count;
    }
};''',
    "typescript": '''function findMaxConsecutiveOnes(nums: number[]): number {
    let maxCount = 0, currentCount = 0;

    for (const num of nums) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}'''
  },
  492: {
    "title": "Construct the Rectangle",
    "slug": "construct-the-rectangle",
    "url": "https://leetcode.com/problems/construct-the-rectangle/",
    "python": '''def constructRectangle(area):
    """
    Find dimensions of rectangle with given area closest to square.

    Args:
        area: int - area of the rectangle

    Returns:
        List[int] - [length, width] where length >= width
    """
    w = int(area ** 0.5)

    while area % w != 0:
        w -= 1

    return [area // w, w]''',
    "cpp": '''class Solution {
public:
    vector<int> constructRectangle(int area) {
        int w = (int)sqrt(area);

        while (area % w != 0) {
            w--;
        }

        return {area / w, w};
    }
};''',
    "typescript": '''function constructRectangle(area: number): number[] {
    let w = Math.floor(Math.sqrt(area));

    while (area % w !== 0) {
        w--;
    }

    return [area / w, w];
}'''
  },
  496: {
    "title": "Next Greater Element I",
    "slug": "next-greater-element-i",
    "url": "https://leetcode.com/problems/next-greater-element-i/",
    "python": '''def nextGreaterElement(nums1, nums2):
    """
    Find next greater element for each element in nums1.

    Args:
        nums1: List[int] - subset array
        nums2: List[int] - parent array

    Returns:
        List[int] - next greater elements (-1 if none)
    """
    next_greater = {}
    stack = []

    for num in reversed(nums2):
        while stack and stack[-1] <= num:
            stack.pop()
        next_greater[num] = stack[-1] if stack else -1
        stack.append(num)

    return [next_greater[num] for num in nums1]''',
    "cpp": '''class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> next_greater;
        stack<int> st;

        for (int i = nums2.size() - 1; i >= 0; i--) {
            while (!st.empty() && st.top() <= nums2[i]) {
                st.pop();
            }
            next_greater[nums2[i]] = st.empty() ? -1 : st.top();
            st.push(nums2[i]);
        }

        vector<int> result;
        for (int num : nums1) {
            result.push_back(next_greater[num]);
        }

        return result;
    }
};''',
    "typescript": '''function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreater = new Map<number, number>();
    const stack: number[] = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }
        nextGreater.set(nums2[i], stack.length > 0 ? stack[stack.length - 1] : -1);
        stack.push(nums2[i]);
    }

    return nums1.map(num => nextGreater.get(num)!);
}'''
  },
  500: {
    "title": "Keyboard Row",
    "slug": "keyboard-row",
    "url": "https://leetcode.com/problems/keyboard-row/",
    "python": '''def findWords(words):
    """
    Find words that can be typed using letters from one row on keyboard.

    Args:
        words: List[str] - list of words

    Returns:
        List[str] - words that use one keyboard row
    """
    rows = [
        set('qwertyuiop'),
        set('asdfghjkl'),
        set('zxcvbnm')
    ]

    result = []
    for word in words:
        word_lower = word.lower()
        for row in rows:
            if all(char in row for char in word_lower):
                result.append(word)
                break

    return result''',
    "cpp": '''class Solution {
public:
    vector<string> findWords(vector<string>& words) {
        vector<set<char>> rows = {
            set<char>{'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'},
            set<char>{'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'},
            set<char>{'z', 'x', 'c', 'v', 'b', 'n', 'm'}
        };

        vector<string> result;
        for (const string& word : words) {
            for (const auto& row : rows) {
                bool found = true;
                for (char c : word) {
                    if (row.find(tolower(c)) == row.end()) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    result.push_back(word);
                    break;
                }
            }
        }

        return result;
    }
};''',
    "typescript": '''function findWords(words: string[]): string[] {
    const rows = [
        new Set('qwertyuiop'),
        new Set('asdfghjkl'),
        new Set('zxcvbnm')
    ];

    const result: string[] = [];
    for (const word of words) {
        const wordLower = word.toLowerCase();
        for (const row of rows) {
            if ([...wordLower].every(char => row.has(char))) {
                result.push(word);
                break;
            }
        }
    }

    return result;
}'''
  }
}
