class Solution:
    def sortSentence(self, s):
        """
        :type s: str
        :rtype: str
        """
        words = s.split()
        for i in range(len(words)):
            while int(words[i][-1])-1 != i:
                words[int(words[i][-1])-1], words[i] = words[i], words[int(words[i][-1])-1]
        return " ".join(itertools.imap(lambda x: x[:-1], words))
