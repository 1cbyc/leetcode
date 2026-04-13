function convertToTitle(columnNumber: number): string {
    let result = "";
    while (columnNumber > 0) {
        columnNumber--;
        result = String.fromCharCode(65 + (columnNumber % 26)) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
}
