class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        order = sorted(range(len(score)), key=lambda i: -score[i])
        answer = [""] * len(score)
        medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]

        for rank, idx in enumerate(order):
            answer[idx] = medals[rank] if rank < 3 else str(rank + 1)
        return answer
