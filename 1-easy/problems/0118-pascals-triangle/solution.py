class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        result = [[1]]
        for i in range(1, numRows):
            prev = result[-1]
            current = [1]
            for j in range(len(prev) - 1):
                current.append(prev[j] + prev[j + 1])
            current.append(1)
            result.append(current)
        return result
