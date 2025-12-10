---
title: "LeetCode 273: Integer to English Words - Python Recursive Approach"
description: "Solving the Integer to English Words problem using Python with recursive helper functions"
date: "2025-01-27"
draft: false
---

# LeetCode 273: Integer to English Words

i recently solved the integer to english words problem on leetcode, and it's a great example of string manipulation and recursive programming. this hard problem tests your understanding of number systems, string building, and systematic problem decomposition.

## Problem Statement

convert a non-negative integer num to its english words representation.

**example 1:**
```
input: num = 123
output: "One Hundred Twenty Three"
```

**example 2:**
```
input: num = 12345
output: "Twelve Thousand Three Hundred Forty Five"
```

**example 3:**
```
input: num = 1234567
output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```

## My Approach

when i first saw this problem, i immediately thought about using a recursive approach with helper functions. the key insight is that we can break down large numbers into smaller chunks and process each chunk systematically using the same logic.

### Initial Thoughts

i started by thinking about different approaches:
1. **recursive approach** - break down number into chunks and process recursively
2. **iterative approach** - process number digit by digit
3. **lookup table approach** - use predefined mappings for all numbers

### Solution Strategy

i decided to use a **recursive approach** with the following strategy:
1. **chunk processing** - break number into chunks of 3 digits
2. **helper functions** - create functions for different number ranges
3. **scale words** - add appropriate scale words (thousand, million, billion)
4. **string building** - combine all parts with proper spacing

## My Solution

```python
class solution:
    def numbertowords(self, num: int) -> str:
        if num == 0:
            return "Zero"
        
        # define number mappings
        ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
        teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
        tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
        scales = ["", "Thousand", "Million", "Billion"]
        
        def convert_less_than_thousand(n):
            if n == 0:
                return ""
            elif n < 10:
                return ones[n]
            elif n < 20:
                return teens[n - 10]
            elif n < 100:
                return tens[n // 10] + (" " + ones[n % 10] if n % 10 != 0 else "")
            else:
                return ones[n // 100] + " Hundred" + (" " + convert_less_than_thousand(n % 100) if n % 100 != 0 else "")
        
        def convert_chunk(n, scale_index):
            if n == 0:
                return ""
            
            chunk_words = convert_less_than_thousand(n)
            if scale_index > 0:
                chunk_words += " " + scales[scale_index]
            
            return chunk_words
        
        # process number in chunks of 3 digits
        result = []
        scale_index = 0
        
        while num > 0:
            chunk = num % 1000
            if chunk != 0:
                chunk_words = convert_chunk(chunk, scale_index)
                result.insert(0, chunk_words)
            
            num //= 1000
            scale_index += 1
        
        return " ".join(result)
```

## Code Breakdown

let me walk through how this solution works:

### 1. Number Mappings
```python
ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
scales = ["", "Thousand", "Million", "Billion"]
```

we define lookup tables for:
- **ones**: numbers 1-9 (with empty string for 0)
- **teens**: numbers 10-19 (special case)
- **tens**: multiples of 10 (20, 30, 40, etc.)
- **scales**: thousand, million, billion

### 2. Helper Function for Numbers < 1000
```python
def convert_less_than_thousand(n):
    if n == 0:
        return ""
    elif n < 10:
        return ones[n]
    elif n < 20:
        return teens[n - 10]
    elif n < 100:
        return tens[n // 10] + (" " + ones[n % 10] if n % 10 != 0 else "")
    else:
        return ones[n // 100] + " Hundred" + (" " + convert_less_than_thousand(n % 100) if n % 100 != 0 else "")
```

this function handles numbers 0-999:
- **0**: return empty string
- **1-9**: use ones mapping
- **10-19**: use teens mapping
- **20-99**: combine tens + ones
- **100-999**: combine hundreds + recursive call for remainder

### 3. Chunk Processing
```python
while num > 0:
    chunk = num % 1000
    if chunk != 0:
        chunk_words = convert_chunk(chunk, scale_index)
        result.insert(0, chunk_words)
    
    num //= 1000
    scale_index += 1
```

we process the number from right to left:
- extract chunks of 3 digits using modulo
- convert each chunk to words
- add appropriate scale words
- insert at beginning to maintain order

## Example Walkthrough

let's trace through the example: num = 12345

```
initial: num = 12345, scale_index = 0

iteration 1:
- chunk = 12345 % 1000 = 345
- chunk_words = "Three Hundred Forty Five"
- result = ["Three Hundred Forty Five"]
- num = 12345 // 1000 = 12
- scale_index = 1

iteration 2:
- chunk = 12 % 1000 = 12
- chunk_words = "Twelve Thousand"
- result = ["Twelve Thousand", "Three Hundred Forty Five"]
- num = 12 // 1000 = 0
- scale_index = 2

final result: "Twelve Thousand Three Hundred Forty Five"
```

## Time and Space Complexity

- **time complexity:** O(log n) where n is the input number
- **space complexity:** O(log n) for the result string

the algorithm is efficient because:
- we process each digit at most once
- the number of iterations is logarithmic in the input size
- string operations are proportional to the number of digits

## Key Insights

1. **chunk processing** - break large numbers into manageable 3-digit chunks
2. **recursive helper** - use recursion to handle different number ranges
3. **scale words** - add appropriate scale words only for non-zero chunks
4. **proper spacing** - handle spacing between words correctly

## Alternative Approaches

i also considered:

1. **iterative approach** - process number digit by digit
   - more complex logic
   - harder to maintain
   - same time complexity

2. **lookup table approach** - pre-compute all possible numbers
   - impractical for large numbers
   - huge memory usage
   - not scalable

3. **string manipulation** - convert to string and process
   - more complex edge cases
   - harder to handle different scales
   - less efficient

## Edge Cases to Consider

1. **zero** - return "Zero"
2. **single digits** - handle 1-9 correctly
3. **teens** - special handling for 10-19
4. **exact hundreds** - no extra words for zero remainder
5. **large numbers** - handle billions correctly
6. **trailing zeros** - don't add extra words for zero chunks

## Python-Specific Features

1. **list comprehensions** - could be used for more concise code
2. **string formatting** - f-strings for cleaner string building
3. **dictionary mappings** - could use dict instead of lists
4. **generator expressions** - for memory efficiency

## Lessons Learned

this problem taught me:
- **recursive thinking** - breaking down complex problems into smaller parts
- **string manipulation** - building strings efficiently
- **number systems** - understanding place value and scales
- **edge case handling** - considering all possible inputs

## Real-World Applications

this problem has applications in:
- **text-to-speech systems** - converting numbers to spoken words
- **document processing** - formatting numbers in reports
- **user interfaces** - displaying numbers in human-readable format
- **localization** - adapting number formats for different languages

## Conclusion

the integer to english words problem is an excellent exercise in recursive programming and string manipulation. the key insight is using helper functions to handle different number ranges systematically, making the solution both efficient and maintainable.

you can find my complete solution on [leetcode](https://leetcode.com/problems/integer-to-english-words/solutions/1234569/integer-to-english-words-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*
