function findWords(words: string[]): string[] {
    const rows = [
        new Set('qwertyuiop'),
        new Set('asdfghjkl'),
        new Set('zxcvbnm')
    ];

    const result: string[] = [];
    for (const word of words) {
        const wordLower = word.toLowerCase();
        for (const row of rows) {
            if ([...wordLower].every(char => row.has(char))) {
                result.push(word);
                break;
            }
        }
    }

    return result;
}
