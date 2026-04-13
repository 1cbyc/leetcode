function isSubsequence(s: string, t: string): boolean {
    let sIdx = 0;

    for (const char of t) {
        if (sIdx < s.length && char === s[sIdx]) {
            sIdx++;
        }
    }

    return sIdx === s.length;
}
