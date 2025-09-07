function canCross(stones: number[]): boolean {
    if (stones.length === 0) return true;
    if (stones[1] !== 1) return false;

    const stoneSet = new Set(stones);
    const visited = new Set<string>();

    function dfs(position: number, lastJump: number): boolean {
        const key = `${position}-${lastJump}`;
        if (visited.has(key)) return false;
        visited.add(key);

        if (position === stones[stones.length - 1]) return true;

        for (let jump = lastJump - 1; jump <= lastJump + 1; jump++) {
            if (jump > 0) {
                const nextPos = position + jump;
                if (stoneSet.has(nextPos)) {
                    if (dfs(nextPos, jump)) return true;
                }
            }
        }

        return false;
    }

    return dfs(1, 1);
}

const test1 = [0, 1, 3, 5, 6, 8, 12, 17];
console.log("Test 1:", canCross(test1));

const test2 = [0, 1, 2, 3, 4, 8, 9, 11];
console.log("Test 2:", canCross(test2));

const test3 = [0, 1, 3, 6, 10, 15, 21];
console.log("Test 3:", canCross(test3));
