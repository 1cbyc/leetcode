class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        rows = len(mat)
        cols = len(mat[0])
        if rows * cols != r * c:
            return mat

        flattened = [value for row in mat for value in row]
        return [flattened[i:i + c] for i in range(0, len(flattened), c)]
