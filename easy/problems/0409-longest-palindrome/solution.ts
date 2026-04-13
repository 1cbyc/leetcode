function longestPalindrome(s: string): number {
    const count = new Map<string, number>();

    for (const char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (const cnt of count.values()) {
        length += Math.floor(cnt / 2) * 2;
        if (cnt % 2 === 1) {
            hasOdd = true;
        }
    }

    return length + (hasOdd ? 1 : 0);
}
