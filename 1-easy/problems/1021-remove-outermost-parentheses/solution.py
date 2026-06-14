class Solution:
    def removeOuterParentheses(self, S):
        """
        :type S: str
        :rtype: str
        """
        deep = 1
        result, cnt = [], 0
        for c in S:
            if c == '(' and cnt >= deep:
                result.append(c)
            if c == ')' and cnt > deep:
                result.append(c)
            cnt += 1 if c == '(' else -1
        return "".join(result)
