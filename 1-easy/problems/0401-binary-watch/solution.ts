function readBinaryWatch(num: number): string[] {
    const result: string[] = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const bitCount = (h.toString(2).match(/1/g) || []).length +
                           (m.toString(2).match(/1/g) || []).length;
            if (bitCount === num) {
                result.push(`${h}:${String(m).padStart(2, '0')}`);
            }
        }
    }

    return result;
}
