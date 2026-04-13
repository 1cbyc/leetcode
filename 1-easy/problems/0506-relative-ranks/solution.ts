function findRelativeRanks(score: number[]): string[] {
    const order = score.map((_, index) => index).sort((a, b) => score[b] - score[a]);
    const result = new Array<string>(score.length);
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    for (let rank = 0; rank < order.length; rank++) {
        const idx = order[rank];
        result[idx] = rank < 3 ? medals[rank] : String(rank + 1);
    }
    return result;
}
