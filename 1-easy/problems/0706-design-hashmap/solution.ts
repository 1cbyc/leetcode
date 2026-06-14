function __init__(key: any, val: any): boolean | number | string | any {
  self.val = val
  self.key = key
  self.next = null
  self.prev = null
}

export { __init__ };
