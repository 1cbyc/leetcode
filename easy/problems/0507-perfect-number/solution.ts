function checkPerfectNumber(num: number): boolean {
    if (num <= 1) {
        return false;
    }

    let total = 1;
    for (let factor = 2; factor * factor <= num; factor++) {
        if (num % factor === 0) {
            total += factor;
            if (factor * factor !== num) {
                total += Math.floor(num / factor);
            }
        }
    }
    return total === num;
}
