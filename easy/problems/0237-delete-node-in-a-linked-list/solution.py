class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def deleteNode(node):
    node.val = node.next.val
    node.next = node.next.next
