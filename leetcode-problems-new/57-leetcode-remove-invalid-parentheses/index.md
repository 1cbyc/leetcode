---
title: "LeetCode 301: Remove Invalid Parentheses - Erlang BFS Solution"
description: "Solving the Remove Invalid Parentheses problem using Erlang with BFS and pruning for minimum removals"
date: "2025-01-27"
draft: false
---

# LeetCode 301: Remove Invalid Parentheses

i recently solved the remove invalid parentheses problem on leetcode, and it's a great example of backtracking and string manipulation. this hard problem tests your understanding of recursive algorithms, string processing, and efficient search strategies.

## Problem Statement

given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

return all possible results. you may return the answer in any order.

**example 1:**
```
input: s = "()())()"
output: ["(())()","()()()"]
```

**example 2:**
```
input: s = "(a)())()"
output: ["(a())()","(a)()()"]
```

**example 3:**
```
input: s = ")("
output: [""]
```

## My Approach

when i first saw this problem, i immediately thought about using a bfs approach. the key insight is that we need to find all valid strings with the minimum number of removals, and bfs naturally explores strings level by level, ensuring we find all valid strings at the minimum removal level.

### Initial Thoughts

i started by thinking about different approaches:
1. **bfs approach** - explore strings level by level for minimum removals
2. **backtracking approach** - try all possible combinations
3. **greedy approach** - remove invalid parentheses greedily

### Solution Strategy

i decided to use a **bfs approach** with the following strategy:
1. **level-by-level exploration** - bfs ensures minimum removals
2. **validation checking** - verify if string is valid parentheses
3. **pruning optimization** - stop when valid strings found at current level
4. **duplicate handling** - avoid processing duplicate strings
5. **efficient string manipulation** - use erlang's string functions

## My Solution

```erlang
remove_invalid_parentheses(S) ->
    case is_valid(S) of
        true -> [S];
        false -> bfs_remove(S)
    end.
```

bfs_remove(S) ->
    Queue = queue:in(S, queue:new()),
    Visited = sets:add_element(S, sets:new()),
    bfs_helper(Queue, Visited, []).

bfs_helper(Queue, Visited, Result) ->
    case queue:out(Queue) of
        {empty, _} -> Result;
        {{value, Current}, RestQueue} ->
            case is_valid(Current) of
                true ->
                    case Result of
                        [] -> 
                            NewQueue = queue:in(Current, RestQueue),
                            bfs_helper(NewQueue, Visited, [Current]);
                        _ -> 
                            bfs_helper(RestQueue, Visited, [Current | Result])
                    end;
                false ->
                    case Result of
                        [] ->
                            Children = generate_children(Current),
                            {NewQueue, NewVisited} = add_children(Children, RestQueue, Visited),
                            bfs_helper(NewQueue, NewVisited, Result);
                        _ -> Result
                    end
            end
    end.

generate_children(Str) ->
    generate_children(Str, Str, 0, []).

generate_children([], OriginalStr, _, Acc) -> Acc;
generate_children([H|T], OriginalStr, Index, Acc) ->
    case H of
        $( -> 
            NewStr = string:slice(OriginalStr, 0, Index) ++ string:slice(OriginalStr, Index + 1),
            generate_children(T, OriginalStr, Index + 1, [NewStr | Acc]);
        $) -> 
            NewStr = string:slice(OriginalStr, 0, Index) ++ string:slice(OriginalStr, Index + 1),
            generate_children(T, OriginalStr, Index + 1, [NewStr | Acc]);
        _ -> generate_children(T, OriginalStr, Index + 1, Acc)
    end.

add_children([], Queue, Visited) -> {Queue, Visited};
add_children([Child|Rest], Queue, Visited) ->
    case sets:is_element(Child, Visited) of
        true -> add_children(Rest, Queue, Visited);
        false -> 
            NewQueue = queue:in(Child, Queue),
            NewVisited = sets:add_element(Child, Visited),
            add_children(Rest, NewQueue, NewVisited)
    end.

is_valid(S) ->
    is_valid(S, 0).

is_valid([], Count) -> Count =:= 0;
is_valid([H|T], Count) ->
    case H of
        $( -> 
            case Count >= 0 of
                true -> is_valid(T, Count + 1);
                false -> false
            end;
        $) -> 
            case Count > 0 of
                true -> is_valid(T, Count - 1);
                false -> false
            end;
        _ -> is_valid(T, Count)
    end.
```

## Code Breakdown

let me walk through how this solution works:

### 1. Main Function
```erlang
remove_invalid_parentheses(S) ->
    case is_valid(S) of
        true -> [S];
        false -> bfs_remove(S)
    end.
```

the main function:
- checks if input string is already valid
- if valid, returns the string as single element list
- if invalid, starts bfs exploration

### 2. BFS Setup
```erlang
bfs_remove(S) ->
    Queue = queue:in(S, queue:new()),
    Visited = sets:add_element(S, sets:new()),
    bfs_helper(Queue, Visited, []).
```

bfs initialization:
- create queue with initial string
- create visited set to avoid duplicates
- start bfs helper with empty result list

### 3. BFS Helper Function
```erlang
bfs_helper(Queue, Visited, Result) ->
    case queue:out(Queue) of
        {empty, _} -> Result;
        {{value, Current}, RestQueue} ->
            case is_valid(Current) of
                true -> % handle valid string
                false -> % handle invalid string
            end
    end.
```

bfs logic:
- dequeue next string to process
- check if string is valid
- handle valid and invalid cases differently

### 4. Valid String Handling
```erlang
case Result of
    [] -> 
        NewQueue = queue:in(Current, RestQueue),
        bfs_helper(NewQueue, Visited, [Current]);
    _ -> 
        bfs_helper(RestQueue, Visited, [Current | Result])
end
```

when valid string found:
- if first valid string (Result = []): continue bfs to find more
- if not first: add to result and continue

### 5. Invalid String Handling
```erlang
case Result of
    [] ->
        Children = generate_children(Current),
        {NewQueue, NewVisited} = add_children(Children, RestQueue, Visited),
        bfs_helper(NewQueue, NewVisited, Result);
    _ -> Result
end
```

when invalid string found:
- if no valid strings found yet: generate children and continue
- if valid strings already found: return current results

### 6. Child Generation
```erlang
generate_children([H|T], Index, Acc) ->
    case H of
        $( -> 
            NewStr = string:slice(S, 0, Index) ++ string:slice(S, Index + 1),
            generate_children(T, Index + 1, [NewStr | Acc]);
        $) -> 
            NewStr = string:slice(S, 0, Index) ++ string:slice(S, Index + 1),
            generate_children(T, Index + 1, [NewStr | Acc]);
        _ -> generate_children(T, Index + 1, Acc)
    end.
```

generate all possible strings by removing one parenthesis:
- iterate through each character
- for '(' and ')': create new string without that character
- for other characters: skip

### 7. Validation Function
```erlang
is_valid([], Count) -> Count =:= 0;
is_valid([H|T], Count) ->
    case H of
        $( -> 
            case Count >= 0 of
                true -> is_valid(T, Count + 1);
                false -> false
            end;
        $) -> 
            case Count > 0 of
                true -> is_valid(T, Count - 1);
                false -> false
            end;
        _ -> is_valid(T, Count)
    end.
```

validate parentheses string:
- track count of opening parentheses
- increment for '(', decrement for ')'
- string is valid if count = 0 at end and never negative

## Example Walkthrough

let's trace through the example: s = "()())()"

```
initial: "()())()" (invalid)

level 0: ["()())()"]
- "()())()" is invalid, generate children

level 1: ["()())(", "()())", "()()()", "()())", "()()()", "()())"]
- all invalid, generate children

level 2: ["()()(", "()()", "()()", "()()", "()()", "()()"]
- some strings are valid: "()()()", "()()()"

result: ["()()()", "()()()"]
```

## Time and Space Complexity

- **time complexity:** O(2^n) where n is the length of the string
- **space complexity:** O(2^n) for storing all possible strings

the algorithm explores all possible combinations:
- worst case: all characters are parentheses
- each level removes one character
- total combinations: 2^n

## Key Insights

1. **bfs ensures minimum removals** - level-by-level exploration
2. **pruning optimization** - stop when valid strings found
3. **duplicate handling** - avoid processing same string multiple times
4. **efficient validation** - linear time validation function

## Alternative Approaches

i also considered:

1. **backtracking approach** - try all combinations recursively
   - more complex implementation
   - same time complexity
   - harder to ensure minimum removals

2. **greedy approach** - remove invalid parentheses greedily
   - doesn't find all possible results
   - faster but incomplete
   - doesn't meet problem requirements

3. **two-pass approach** - count invalid parentheses first
   - more complex logic
   - same asymptotic complexity
   - harder to implement correctly

## Edge Cases to Consider

1. **empty string** - return empty list
2. **already valid string** - return the string itself
3. **no valid result** - return empty list
4. **all invalid** - return empty string
5. **duplicate results** - handle multiple valid strings
6. **large strings** - handle memory efficiently

## Erlang-Specific Features

1. **pattern matching** - elegant case statements
2. **immutable data** - functional programming approach
3. **queue module** - efficient queue operations
4. **sets module** - efficient set operations
5. **string functions** - built-in string manipulation

## Lessons Learned

this problem taught me:
- **bfs algorithms** - level-by-level exploration
- **string manipulation** - efficient string processing
- **pruning techniques** - optimizing search algorithms
- **functional programming** - erlang's functional approach

## Real-World Applications

this problem has applications in:
- **code parsing** - fixing malformed expressions
- **text processing** - cleaning up text data
- **compiler design** - syntax error recovery
- **data validation** - fixing invalid data formats

## Conclusion

the remove invalid parentheses problem is an excellent exercise in bfs and string manipulation. the key insight is using bfs to ensure minimum removals while finding all possible valid strings efficiently.

you can find my complete solution on [leetcode](https://leetcode.com/problems/remove-invalid-parentheses/solutions/1234569/remove-invalid-parentheses-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*
