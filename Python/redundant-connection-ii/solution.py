from typing import List

class Solution:
    def findRedundantDirectedConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        parent = {}
        e1, e2 = None, None
        for u, v in edges:
            if v in parent:
                e1 = [parent[v], v]
                e2 = [u, v]
                break
            parent[v] = u
            
        def find(ds, i):
            while ds[i] != i:
                ds[i] = ds[ds[i]]
                i = ds[i]
            return i
        
        def get_cycle_edge(skip_edge):
            ds = list(range(n + 1))
            for u, v in edges:
                if [u, v] == skip_edge: continue
                root_u = find(ds, u)
                root_v = find(ds, v)
                if root_u == root_v: return [u, v]
                ds[root_v] = root_u
            return None

        if not e2:
            return get_cycle_edge(None)
        
        if get_cycle_edge(e2):
            return e1
        return e2

def test_solution():
    sol = Solution()
    assert sol.findRedundantDirectedConnection([[1,2], [1,3], [2,3]]) == [2,3]
    assert sol.findRedundantDirectedConnection([[1,2], [2,3], [3,4], [4,1], [1,5]]) == [4,1]
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
