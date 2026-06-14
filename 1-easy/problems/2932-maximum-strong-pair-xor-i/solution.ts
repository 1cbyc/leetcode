function maximumStrongPairXor(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  class Trie(object):
      def __init__(self, bit_length):
          self.__nodes = []
          self.__cnts = []
          self.__new_node()
          self.__bit_length = bit_length

      def __new_node(self):
          self.__nodes.append([-1]*2)
          self.__cnts.append(0)
          return (self.__nodes).length-1;
}

export { maximumStrongPairXor };
