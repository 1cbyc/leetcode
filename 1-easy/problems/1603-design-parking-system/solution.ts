function __init__(big: any, medium: any, small: any): boolean | number | string | any {
  """
  :type big: int
  :type medium: int
  :type small: int
  """
  self.__space = [0, big, medium, small]
}

export { __init__ };
