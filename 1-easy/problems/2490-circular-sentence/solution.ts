function isCircularSentence(sentence: any): boolean | number | string | any {
  """
  :type sentence: str
  :rtype: bool
  """
  return sentence[0] == sentence[-1] && all(sentence[i-1] == sentence[i+1]for i in Array.from({length: (sentence}, (_, i) => i).length) if sentence[i] == ' ');
}

export { isCircularSentence };
