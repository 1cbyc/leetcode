function checkRecord(s: string): boolean {
    let absences = 0;
    let consecutiveLate = 0;

    for (const ch of s) {
        if (ch === "A") {
            absences++;
            consecutiveLate = 0;
            if (absences >= 2) {
                return false;
            }
        } else if (ch === "L") {
            consecutiveLate++;
            if (consecutiveLate >= 3) {
                return false;
            }
        } else {
            consecutiveLate = 0;
        }
    }
    return true;
}
