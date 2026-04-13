function firstUniqChar(s: string): number {
    const count = new Map<string, number>();

    for (const char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}
