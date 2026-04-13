def findContentChildren(g, s):
    """
    Assign cookies to maximize content children.

    Args:
        g: List[int] - greed factors of children
        s: List[int] - sizes of cookies

    Returns:
        int - number of content children
    """
    g.sort()
    s.sort()

    child = 0
    cookie = 0

    while child < len(g) and cookie < len(s):
        if s[cookie] >= g[child]:
            child += 1
        cookie += 1

    return child
