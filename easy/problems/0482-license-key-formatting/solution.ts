function licenseKeyFormatting(S: string, K: number): string {
    const cleaned = S.replace(/-/g, '').toUpperCase();

    if (cleaned.length === 0) return "";

    const result: string[] = [];
    for (let i = cleaned.length - 1; i >= 0; i--) {
        if (result.length > 0 && result.length % (K + 1) === K) {
            result.push('-');
        }
        result.push(cleaned[i]);
    }

    return result.reverse().join('');
}
