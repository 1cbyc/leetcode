function minTimeToType(word: any): boolean | number | string | any {
  """
  :type word: str
  :rtype: int
  """
  return (min((ord(word[0])-ord('a'))%26, (ord('a')-ord(word[0]))%26)+1) + \;
         sum(min((ord(word[i])-ord(word[i-1]))%26, (ord(word[i-1])-ord(word[i]))%26)+1
             for i in Array.from({length: 1, (word}, (_, i) => i).length))
}

export { minTimeToType };
