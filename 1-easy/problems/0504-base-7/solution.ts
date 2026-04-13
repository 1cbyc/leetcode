function convertToBase7(num: number): string {
    if (num === 0) {
        return "0";
    }

    const sign = num < 0 ? "-" : "";
    let value = Math.abs(num);
    const digits: string[] = [];
    while (value > 0) {
        digits.push(String(value % 7));
        value = Math.floor(value / 7);
    }
    digits.reverse();
    return sign + digits.join("");
}
