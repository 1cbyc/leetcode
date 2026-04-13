class MyStack {
    private queue: number[] = [];

    push(x: number): void {
        this.queue.push(x);
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift()!);
        }
    }

    pop(): number {
        return this.queue.shift()!;
    }

    top(): number {
        return this.queue[0];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}
