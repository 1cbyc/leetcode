function canConstruct(ransomNote: string, magazine: string): boolean {
    const count = new Map<string, number>();

    for (const char of magazine) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        if ((count.get(char) || 0) <= 0) {
            return false;
        }
        count.set(char, count.get(char)! - 1);
    }

    return true;
}
