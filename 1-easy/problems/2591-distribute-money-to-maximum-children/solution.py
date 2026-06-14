class Solution:
    def distMoney(self, money, children):
        """
        :type money: int
        :type children: int
        :rtype: int
        """
        if money < children*1:
            return -1
        money -= children*1
        q, r = divmod(money, 7)
        return min(q, children) - int(q > children or (q == children and r != 0) or (q == children-1 and r == 3))


# greedy
class Solution2(object):
    def distMoney(self, money, children):
        """
        :type money: int
        :type children: int
        :rtype: int
        """
        if money < children*1:
            return -1
        money -= children*1
        q, r = divmod(money, 7)
        if q > children:
            return children-1
        if q == children:
            return q-int(r != 0)
        if q == children-1:
            return q-int(r == 3)
        return q
