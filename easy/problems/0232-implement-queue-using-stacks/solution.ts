class MyQueue {
    private stackIn: number[] = [];
    private stackOut: number[] = [];

    push(x: number): void {
        this.stackIn.push(x);
    }

    pop(): number {
        this.peek();
        return this.stackOut.pop()!;
    }

    peek(): number {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop()!);
            }
        }
        return this.stackOut[this.stackOut.length - 1];
    }

    empty(): boolean {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }
}
