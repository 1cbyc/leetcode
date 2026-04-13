function repeatedSubstringPattern(s: string): boolean {
    const doubled = s + s;
    return doubled.substring(1, 2 * s.length - 1).includes(s);
}
