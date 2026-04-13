function findPoisonedDuration(timeSeries: number[], duration: number): number {
    if (timeSeries.length === 0) {
        return 0;
    }

    let total = 0;
    for (let i = 1; i < timeSeries.length; i++) {
        total += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
    }
    return total + duration;
}
