function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";
    let prefix = strs[0];
    for (const s of strs) {
        while (!s.startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }
    return prefix;
}
