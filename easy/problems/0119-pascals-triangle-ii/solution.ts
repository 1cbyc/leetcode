function getRow(rowIndex: number): number[] {
    const row = new Array(rowIndex + 1).fill(1);
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
    }
    return row;
}
