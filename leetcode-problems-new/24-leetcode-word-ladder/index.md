---
title: "LeetCode 127: Word Ladder - BFS for Shortest Path"
description: "Solving the Word Ladder problem using breadth-first search to find the shortest transformation sequence"
date: "2024-11-25"
draft: false
---

# LeetCode 127: Word Ladder

i recently solved the word ladder problem on leetcode, and it's a great example of how breadth-first search (bfs) can be used to find the shortest path in a graph. this problem tests your understanding of graph traversal and string manipulation.

## Problem Statement

A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:

- Every adjacent pair of words differs by a single character
- Every `si` for `1 <= i <= k` is in `wordList`

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or `0` if no such sequence exists.

**Example:**
```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 words long.
```

## My Approach

when i first saw this problem, i immediately thought about using bfs. the key insight is that we can treat this as a graph problem where:
- each word is a node
- edges connect words that differ by exactly one character
- we need to find the shortest path from beginWord to endWord

### Initial Thoughts

i started by thinking about how to build the graph:
1. **word connections** - how to find all words that differ by one character
2. **bfs traversal** - how to find the shortest path
3. **optimization** - how to make it efficient for large dictionaries

### Solution Strategy

i decided to use a **bfs approach** with the following strategy:
1. **build adjacency list** - find all words that differ by one character
2. **use bfs** - find shortest path from beginWord to endWord
3. **optimize with sets** - use sets for faster lookups
4. **track levels** - keep track of the transformation sequence length

## My Solution

```python
from collections import deque, defaultdict

def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
    if endWord not in wordList:
        return 0
    
    # build adjacency list
    wordList = set(wordList)
    queue = deque([(beginWord, 1)])
    visited = set([beginWord])
    
    while queue:
        word, level = queue.popleft()
        
        if word == endWord:
            return level
        
        # try changing each character
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i+1:]
                
                if new_word in wordList and new_word not in visited:
                    visited.add(new_word)
                    queue.append((new_word, level + 1))
    
    return 0
```

## Code Breakdown

let me walk through how this solution works:

### 1. Initial Setup
```python
if endWord not in wordList:
    return 0

wordList = set(wordList)
queue = deque([(beginWord, 1)])
visited = set([beginWord])
```

**early exit:** if endWord is not in wordList, no transformation is possible
**optimization:** convert wordList to set for O(1) lookups
**bfs setup:** initialize queue with beginWord and level 1

### 2. BFS Traversal
```python
while queue:
    word, level = queue.popleft()
    
    if word == endWord:
        return level
```

**process words:** take words from queue in bfs order
**check target:** if we reach endWord, return the level (shortest path)

### 3. Word Transformation
```python
for i in range(len(word)):
    for c in 'abcdefghijklmnopqrstuvwxyz':
        new_word = word[:i] + c + word[i+1:]
        
        if new_word in wordList and new_word not in visited:
            visited.add(new_word)
            queue.append((new_word, level + 1))
```

**character replacement:** try changing each character to each letter
**validation:** check if new word exists in wordList and hasn't been visited
**add to queue:** add valid transformations to bfs queue

## Example Walkthrough

let's trace through the example: `beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]`

```
queue: [(hit, 1)]
visited: {hit}

1. process "hit" (level 1):
   - try: ait, bit, cit, ..., zit (none in wordList)
   - try: hat, hbt, hct, ..., hzt (none in wordList)
   - try: hia, hib, hic, ..., hiz (none in wordList)
   - try: hta, htb, htc, ..., htz -> "hot" found!
   queue: [(hot, 2)]
   visited: {hit, hot}

2. process "hot" (level 2):
   - try: aot, bot, cot, ..., zot -> "dot", "lot" found!
   queue: [(dot, 3), (lot, 3)]
   visited: {hit, hot, dot, lot}

3. process "dot" (level 3):
   - try: aot, bot, cot, ..., zot -> "dog" found!
   queue: [(lot, 3), (dog, 4)]
   visited: {hit, hot, dot, lot, dog}

4. process "lot" (level 3):
   - try: aot, bot, cot, ..., zot -> "log" found!
   queue: [(dog, 4), (log, 4)]
   visited: {hit, hot, dot, lot, dog, log}

5. process "dog" (level 4):
   - try: aog, bog, cog, ..., zog -> "cog" found!
   return 5 (level 5)
```

## Time and Space Complexity

- **time complexity:** O(n * 26 * word_length) where n is the number of words
  - for each word, we try 26 letters at each position
  - bfs ensures we find the shortest path
- **space complexity:** O(n) for the queue and visited set

## Key Insights

1. **bfs guarantees shortest path** - perfect for finding minimum transformations
2. **character replacement** - efficient way to find adjacent words
3. **set optimization** - O(1) lookups instead of O(n) list searches
4. **visited tracking** - prevents cycles and redundant processing

## Alternative Approaches

i also considered:

1. **bidirectional bfs** - search from both ends (more complex but faster)
2. **preprocessing** - build adjacency list first (more memory)
3. **dfs with memoization** - but bfs is more efficient for shortest path

the bfs approach is clean, efficient, and easy to understand.

## Edge Cases to Consider

1. **endWord not in wordList** - return 0 immediately
2. **beginWord equals endWord** - return 1
3. **no transformation possible** - return 0
4. **empty wordList** - return 0
5. **words of different lengths** - not possible in this problem

## Lessons Learned

this problem taught me:
- how to apply bfs to find shortest paths in graphs
- the importance of efficient data structures (sets vs lists)
- how to handle string transformations systematically
- the power of bfs for shortest path problems

## Conclusion

the word ladder problem is a great exercise in graph traversal and string manipulation. the bfs approach is both elegant and efficient for finding the shortest transformation sequence.

you can find my complete solution on [leetcode](https://leetcode.com/problems/word-ladder/solutions/5463228/problem-127-word-ladder-solution-by-1cby-u1p9).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.* 