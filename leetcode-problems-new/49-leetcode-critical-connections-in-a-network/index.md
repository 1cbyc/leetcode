---
title: "LeetCode 1192: Critical Connections in a Network - Tarjan's Algorithm"
description: "Solving the Critical Connections in a Network problem using Tarjan's algorithm to find bridges in a graph"
date: "2025-01-27"
draft: false
---

# LeetCode 1192: Critical Connections in a Network

i recently solved the critical connections in a network problem on leetcode, and it's a great example of graph algorithms and tarjan's algorithm. this hard problem tests your understanding of graph theory, depth-first search, and bridge detection.

## Problem Statement

there are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. any server can reach other servers directly or indirectly through the network.

a critical connection is a connection that, if removed, will make some servers unable to reach some other server.

return all critical connections in the network in any order.

**example:**
```
input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
output: [[1,3]]
```

## My Approach

when i first saw this problem, i immediately thought about using tarjan's algorithm. the key insight is that critical connections are essentially bridges in the graph - edges whose removal increases the number of connected components.

### Initial Thoughts

i started by thinking about different approaches:
1. **brute force** - remove each edge and check connectivity (O(E * (V+E)))
2. **tarjan's algorithm** - find all bridges in the graph (O(V+E))
3. **alternative approach** - using articulation points concept

### Solution Strategy

i decided to use **tarjan's algorithm** with the following strategy:
1. **build adjacency list** - create graph representation
2. **dfs traversal** - perform depth-first search with discovery times
3. **track lowest reachable** - maintain lowest discovery time reachable from each node
4. **detect bridges** - identify edges where low[v] > disc[u]

## My Solution

```typescript
function criticalConnections(n: number, connections: number[][]): number[][] {
    // build adjacency list
    const graph: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const result: number[][] = [];
    const disc: number[] = new Array(n).fill(-1);  // discovery times
    const low: number[] = new Array(n).fill(-1);   // lowest reachable times
    let time = 0;
    
    function dfs(u: number, parent: number): void {
        disc[u] = low[u] = time++;
        
        for (const v of graph[u]) {
            if (v === parent) continue; // skip parent to avoid back edge
            
            if (disc[v] === -1) {
                // v is not visited, recur for it
                dfs(v, u);
                
                // check if the subtree rooted with v has a connection
                // to one of the ancestors of u
                low[u] = Math.min(low[u], low[v]);
                
                // if the lowest vertex reachable from subtree under v
                // is below u in dfs tree, then u-v is a bridge
                if (low[v] > disc[u]) {
                    result.push([u, v]);
                }
            } else {
                // update low value of u for parent function calls
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }
    
    // find all bridges using dfs
    for (let i = 0; i < n; i++) {
        if (disc[i] === -1) {
            dfs(i, -1);
        }
    }
    
    return result;
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Graph Construction
```typescript
const graph: number[][] = Array.from({ length: n }, () => []);
for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
}
```

we build an adjacency list representation of the undirected graph. each node maintains a list of its neighbors.

### 2. DFS with Discovery Times
```typescript
const disc: number[] = new Array(n).fill(-1);  // discovery times
const low: number[] = new Array(n).fill(-1);   // lowest reachable times
let time = 0;
```

we track two important values for each node:
- `disc[u]`: when node u was first discovered in dfs
- `low[u]`: lowest discovery time reachable from u through back edges

### 3. Bridge Detection Logic
```typescript
if (low[v] > disc[u]) {
    result.push([u, v]);
}
```

this is the key insight: an edge (u,v) is a bridge if the subtree rooted at v cannot reach any ancestor of u. this means removing the edge would disconnect the graph.

## Example Walkthrough

let's trace through the example: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]

```
step 1: start dfs from node 0
- disc[0] = low[0] = 0

step 2: visit node 1 (neighbor of 0)
- disc[1] = low[1] = 1

step 3: visit node 2 (neighbor of 1)
- disc[2] = low[2] = 2

step 4: node 2 connects back to 0 (back edge)
- low[2] = min(low[2], disc[0]) = min(2, 0) = 0

step 5: backtrack to node 1
- low[1] = min(low[1], low[2]) = min(1, 0) = 0

step 6: visit node 3 (neighbor of 1)
- disc[3] = low[3] = 3

step 7: check edge (1,3)
- low[3] = 3 > disc[1] = 1, so (1,3) is a bridge

result: [[1,3]]
```

## Time and Space Complexity

- **time complexity:** O(V + E) where V is number of vertices and E is number of edges
- **space complexity:** O(V + E) for the adjacency list and recursion stack

the algorithm performs a single dfs traversal, visiting each node and edge exactly once.

## Key Insights

1. **bridge detection** - critical connections are bridges in graph theory
2. **tarjan's algorithm** - efficient way to find all bridges in a single dfs pass
3. **discovery vs lowest reachable** - the relationship between these values determines bridges
4. **back edge handling** - crucial to skip parent edges to avoid incorrect back edge detection

## Alternative Approaches

i also considered:

1. **brute force removal** - remove each edge and check connectivity using dfs/bfs
   - time complexity: O(E * (V+E))
   - space complexity: O(V+E)
   - much less efficient for large graphs

2. **articulation points** - find articulation points and their associated bridges
   - similar to tarjan's algorithm
   - focuses on nodes rather than edges

## Edge Cases to Consider

1. **single edge** - if there's only one edge, it's always critical
2. **disconnected graph** - handle multiple connected components
3. **self-loops** - though not present in this problem, they would need special handling
4. **empty graph** - return empty array

## Lessons Learned

this problem taught me:
- **graph theory fundamentals** - understanding bridges and connectivity
- **tarjan's algorithm** - powerful technique for graph analysis
- **dfs with state tracking** - maintaining discovery and lowest reachable times
- **algorithm optimization** - choosing the right approach for efficiency

## Conclusion

the critical connections problem is an excellent exercise in graph algorithms and tarjan's algorithm. the key insight is recognizing that critical connections are bridges, and tarjan's algorithm provides the most efficient solution.

you can find my complete solution on [leetcode](https://leetcode.com/problems/critical-connections-in-a-network/solutions/1234569/critical-connections-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*
