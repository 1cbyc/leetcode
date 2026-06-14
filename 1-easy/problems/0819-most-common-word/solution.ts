function mostCommonWord(paragraph: any, banned: any): boolean | number | string | any {
  """
  :type paragraph: str
  :type banned: List[str]
  :rtype: str
  """
  lookup = set(banned)
  counts = collections.Counter(word.strip("!?',.")
                               for word in paragraph.lower().split())
}

export { mostCommonWord };
