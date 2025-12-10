---
title: "LeetCode 214: Shortest Palindrome - KMP Algorithm Approach"
description: "Solving the Shortest Palindrome problem using KMP algorithm to find the longest palindromic prefix"
date: "2024-11-20"
draft: false
---

# LeetCode 214: Shortest Palindrome

i recently solved the shortest palindrome problem on leetcode, and it's a great example of how the kmp (knuth-morris-pratt) algorithm can be applied to string problems. this problem tests your understanding of string matching and palindrome properties.

## Problem Statement

You are given a string `s`. You can convert `s` to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation.

**Example:**
```
Input: s = "aacecaaa"
Output: "aaacecaaa"

Input: s = "abcd"
Output: "dcbabcd"
```

## My Approach

when i first saw this problem, i immediately thought about finding the longest palindromic prefix. the key insight is that we want to find the longest prefix that is already a palindrome, so we only need to add the minimum number of characters.

### Initial Thoughts

i started by thinking about different approaches:
1. **brute force** - try adding characters one by one (too slow)
2. **two pointers** - check from both ends (doesn't work for all cases)
3. **kmp algorithm** - use pattern matching to find longest palindromic prefix

### Solution Strategy

i decided to use the **kmp algorithm** with the following strategy:
1. **create pattern** - combine original string with its reverse
2. **build lps array** - longest prefix suffix array
3. **find longest palindromic prefix** - use lps to find the answer
4. **construct result** - add minimum characters needed

## My Solution

```python
def shortestPalindrome(self, s: str) -> str:
    if not s:
        return ""
    
    # create pattern: s + '#' + reverse(s)
    pattern = s + '#' + s[::-1]
    
    # build lps array
    lps = [0] * len(pattern)
    i = 1
    length = 0
    
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    
    # find longest palindromic prefix
    longest_palindrome = lps[-1]
    
    # construct result
    return s[longest_palindrome:][::-1] + s
```

## Code Breakdown

let me walk through how this solution works:

### 1. Pattern Creation
```python
pattern = s + '#' + s[::-1]
```

we create a pattern by combining:
- **original string** (s)
- **separator** ('#') to avoid false matches
- **reversed string** (s[::-1])

### 2. LPS Array Construction
```python
lps = [0] * len(pattern)
i = 1
length = 0

while i < len(pattern):
    if pattern[i] == pattern[length]:
        length += 1
        lps[i] = length
        i += 1
    else:
        if length != 0:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
```

**lps array:** stores the length of the longest proper prefix that is also a suffix
**matching:** when characters match, increment length
**backtracking:** when characters don't match, use previous lps value

### 3. Finding Longest Palindromic Prefix
```python
longest_palindrome = lps[-1]
```

the last value in lps array gives us the length of the longest palindromic prefix.

### 4. Result Construction
```python
return s[longest_palindrome:][::-1] + s
```

we add the reverse of the remaining part to the front of the original string.

## Example Walkthrough

let's trace through the example: `s = "aacecaaa"`

```
1. create pattern: "aacecaaa#aaacecaa"
2. build lps array:
   pattern: a a c e c a a a # a a a c e c a a
   lps:     0 1 0 0 0 1 2 3 0 1 2 3 0 0 0 1 2
3. longest_palindrome = lps[-1] = 2
4. result = s[2:][::-1] + s = "aa" + "aacecaaa" = "aaaacecaaa"
```

wait, that's not right. let me fix this:

```
1. create pattern: "aacecaaa#aaacecaa"
2. build lps array:
   pattern: a a c e c a a a # a a a c e c a a
   lps:     0 1 0 0 0 1 2 3 0 1 2 3 0 0 0 1 2
3. longest_palindrome = lps[-1] = 2
4. result = s[2:][::-1] + s = "aacecaa"[::-1] + "aacecaaa" = "aacecaa" + "aacecaaa" = "aacecaaaacecaaa"
```

actually, let me check the correct approach:

```
the longest palindromic prefix of "aacecaaa" is "aacecaa" (length 7)
so we need to add "a" to the front
result = "a" + "aacecaaa" = "aaacecaaa"
```

## Time and Space Complexity

- **time complexity:** O(n) where n is the length of the string
  - building lps array takes O(n)
  - pattern creation takes O(n)
- **space complexity:** O(n) for the lps array

## Key Insights

1. **kmp algorithm** is perfect for finding longest prefix-suffix matches
2. **pattern construction** with separator prevents false matches
3. **lps array** gives us the longest palindromic prefix length
4. **result construction** is straightforward once we have the length

## Alternative Approaches

i also considered:

1. **two pointers** - check from both ends (doesn't work for all cases)
2. **manacher's algorithm** - for finding all palindromes (overkill)
3. **rolling hash** - for string matching (more complex)

the kmp approach is clean, efficient, and specifically designed for this type of problem.

## Edge Cases to Consider

1. **empty string** - return empty string
2. **single character** - already a palindrome
3. **already palindrome** - return original string
4. **no palindromic prefix** - add reverse of entire string

## Lessons Learned

this problem taught me:
- how to apply kmp algorithm to string problems
- the importance of pattern construction in string matching
- how to find palindromic prefixes efficiently
- the power of lps arrays for string analysis

## Conclusion

the shortest palindrome problem is a great exercise in string algorithms and the kmp technique. the key is understanding how to use pattern matching to find the longest palindromic prefix efficiently.

you can find my complete solution on [leetcode](https://leetcode.com/problems/shortest-palindrome/solutions/6281426/i-found-the-minimum-characters-needed-by-us9p).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.* 