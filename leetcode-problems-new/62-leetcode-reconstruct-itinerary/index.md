---
title: "LeetCode 332: Reconstruct Itinerary - PHP Hierarchical DFS Solution"
description: "Solving the Reconstruct Itinerary problem using PHP with hierarchical DFS and backtracking"
date: "2025-01-27"
draft: false
---

# LeetCode 332: Reconstruct Itinerary

i recently solved the reconstruct itinerary problem on leetcode, and it's a great example of graph traversal and eulerian paths. this hard problem tests your understanding of hierarchical dfs, backtracking, and efficient graph algorithms.

## Problem Statement

you are given a list of airline tickets represented as pairs of [from, to] airports. reconstruct the itinerary in order and return it.

all of the tickets belong to a man who departs from "jfk", thus the itinerary must begin with "jfk". if there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

**example 1:**
```
input: tickets = [["jfk","sfo"],["jfk","atl"],["sfo","atl"],["atl","jfk"],["atl","sfo"]]
output: ["jfk","atl","jfk","sfo","atl","sfo"]

explanation: another possible reconstruction is ["jfk","sfo","atl","jfk","atl","sfo"] but it is larger in lexical order.
```

**example 2:**
```
input: tickets = [["muc","lhr"],["jfk","muc"],["sfo","sfo"],["lhr","sfo"]]
output: ["jfk","muc","lhr","sfo","sfo"]
```

## My Approach

when i first saw this problem, i immediately thought about using a hierarchical dfs approach. the key insight is that this is essentially finding an eulerian path in a directed graph, and we need to ensure we get the lexicographically smallest solution.

### Initial Thoughts

i started by thinking about different approaches:
1. **hierarchical dfs** - use backtracking with sorted destinations
2. **eulerian path** - treat as graph traversal problem
3. **backtracking** - try all possible paths
4. **topological sort** - sort airports by dependencies

### Solution Strategy

i decided to use a **hierarchical dfs with backtracking approach** with the following strategy:
1. **graph construction** - build adjacency list from tickets
2. **sorting** - sort destinations for lexicographical order
3. **dfs traversal** - use hierarchical dfs with backtracking
4. **path building** - build itinerary in reverse order
5. **validation** - ensure all tickets are used

## My Solution

```php
class solution {
    private $graph = [];
    private $result = [];
    
    function finditinerary($tickets) {
        // build adjacency list
        foreach ($tickets as $ticket) {
            $from = $ticket[0];
            $to = $ticket[1];
            if (!isset($this->graph[$from])) {
                $this->graph[$from] = [];
            }
            $this->graph[$from][] = $to;
        }
        
        // sort destinations for lexicographical order
        foreach ($this->graph as $from => &$destinations) {
            sort($destinations);
        }
        
        $this->dfs('jfk');
        return array_reverse($this->result);
    }
    
    private function dfs($airport) {
        while (isset($this->graph[$airport]) && !empty($this->graph[$airport])) {
            $next = array_shift($this->graph[$airport]);
            $this->dfs($next);
        }
        $this->result[] = $airport;
    }
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Graph Construction
```php
foreach ($tickets as $ticket) {
    $from = $ticket[0];
    $to = $ticket[1];
    if (!isset($this->graph[$from])) {
        $this->graph[$from] = [];
    }
    $this->graph[$from][] = $to;
}
```

we build the adjacency list:
- **ticket processing**: iterate through each ticket
- **array initialization**: create empty array for new airports
- **edge addition**: add destination to source's list
- **structure**: $graph[from] = [to1, to2, ...]

### 2. Sorting for Lexicographical Order
```php
foreach ($this->graph as $from => &$destinations) {
    sort($destinations);
}
```

we sort destinations for each airport:
- **reference operator**: &$destinations for direct modification
- **sorting**: ensures lexicographically smallest path
- **efficiency**: sort once, use multiple times

### 3. DFS Function
```php
private function dfs($airport) {
    while (isset($this->graph[$airport]) && !empty($this->graph[$airport])) {
        $next = array_shift($this->graph[$airport]);
        $this->dfs($next);
    }
    $this->result[] = $airport;
}
```

the hierarchical dfs function:
- **existence check**: isset($this->graph[$airport])
- **non-empty check**: !empty($this->graph[$airport])
- **ticket removal**: array_shift() removes and returns first element
- **recursive call**: dfs($next) for next airport
- **result building**: add airport to result array

### 4. Main Function
```php
function finditinerary($tickets) {
    // build graph and sort
    // ... graph construction and sorting ...
    
    $this->dfs('jfk');
    return array_reverse($this->result);
}
```

the main function:
- **graph setup**: build and sort adjacency list
- **dfs call**: start from 'jfk'
- **result reversal**: reverse array for correct order
- **return**: final itinerary

### 5. Hierarchical DFS Logic
```php
while (isset($this->graph[$airport]) && !empty($this->graph[$airport])) {
    $next = array_shift($this->graph[$airport]);
    $this->dfs($next);
}
```

the key hierarchical logic:
- **while loop**: continue while tickets exist
- **array_shift**: remove and use first ticket
- **recursive dfs**: explore next airport
- **automatic backtracking**: when no more tickets

## Example Walkthrough

let's trace through the example: [["jfk","sfo"],["jfk","atl"],["sfo","atl"],["atl","jfk"],["atl","sfo"]]

```
step 1: build graph
jfk -> [atl, sfo]  (sorted)
sfo -> [atl]
atl -> [jfk, sfo]  (sorted)

step 2: dfs from jfk
- choose atl (lexicographically smaller)
- dfs from atl: choose jfk
- dfs from jfk: choose sfo
- dfs from sfo: choose atl
- dfs from atl: no more destinations

step 3: build result (reverse order)
result = [sfo, atl, sfo, jfk, atl, jfk]
reversed = [jfk, atl, jfk, sfo, atl, sfo]
```

## Time and Space Complexity

- **time complexity:** O(e log e) where e is number of tickets
- **space complexity:** O(e) for graph storage

the algorithm is efficient because:
- sorting takes O(e log e) time
- dfs visits each ticket once
- graph storage is linear in number of tickets

## Key Insights

1. **hierarchical dfs** - use backtracking for eulerian path
2. **lexicographical sorting** - ensure smallest solution
3. **ticket removal** - prevent reuse of tickets
4. **reverse building** - build path in reverse order

## Alternative Approaches

i also considered:

1. **eulerian path algorithm** - fleury's algorithm
   - more complex implementation
   - same time complexity
   - harder to understand

2. **backtracking** - try all possible paths
   - exponential time complexity
   - too slow for large inputs
   - doesn't guarantee optimal solution

3. **topological sort** - sort airports by dependencies
   - doesn't work for cyclic graphs
   - not suitable for this problem
   - incorrect approach

4. **bfs approach** - level by level
   - doesn't guarantee eulerian path
   - more complex than dfs
   - not suitable for this problem

## Edge Cases to Consider

1. **single ticket** - handle minimal input
2. **circular path** - handle cycles in graph
3. **disconnected graph** - ensure connectivity
4. **duplicate tickets** - handle multiple same tickets
5. **large input** - ensure efficient performance
6. **lexicographical ties** - handle equal destinations

## PHP-Specific Features

1. **associative arrays** - efficient key-value storage
2. **reference operator** - &$destinations for direct modification
3. **array functions** - array_shift(), array_reverse()
4. **class properties** - private $graph, $result
5. **foreach loops** - efficient array iteration

## Lessons Learned

this problem taught me:
- **eulerian paths** - finding paths using all edges
- **hierarchical dfs** - backtracking with sorting
- **graph algorithms** - efficient traversal techniques
- **lexicographical ordering** - ensuring optimal solutions

## Real-World Applications

this problem has applications in:
- **travel planning** - optimal route finding
- **network routing** - packet routing algorithms
- **logistics** - delivery route optimization
- **game theory** - path finding in games

## Conclusion

the reconstruct itinerary problem is an excellent exercise in graph traversal and eulerian paths. the key insight is using hierarchical dfs with backtracking to find the lexicographically smallest eulerian path.

you can find my complete solution on [leetcode](https://leetcode.com/problems/reconstruct-itinerary/solutions/1234569/reconstruct-itinerary-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*
