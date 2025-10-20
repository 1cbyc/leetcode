function finalValueAfterOperations(operations: string[]): number {
    let x = 0;

    for (const op of operations) {
        if (op.includes('+')) {
            x++;
        } else {
            x--;
        }
    }

    return x;
};