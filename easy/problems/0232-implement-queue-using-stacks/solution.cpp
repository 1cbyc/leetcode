class MyQueue {
private:
    stack<int> stackIn;
    stack<int> stackOut;
public:
    MyQueue() {}

    void push(int x) {
        stackIn.push(x);
    }

    int pop() {
        peek();
        int top = stackOut.top();
        stackOut.pop();
        return top;
    }

    int peek() {
        if (stackOut.empty()) {
            while (!stackIn.empty()) {
                stackOut.push(stackIn.top());
                stackIn.pop();
            }
        }
        return stackOut.top();
    }

    bool empty() {
        return stackIn.empty() && stackOut.empty();
    }
};
