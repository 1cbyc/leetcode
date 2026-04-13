def constructRectangle(area):
    """
    Find dimensions of rectangle with given area closest to square.

    Args:
        area: int - area of the rectangle

    Returns:
        List[int] - [length, width] where length >= width
    """
    w = int(area ** 0.5)

    while area % w != 0:
        w -= 1

    return [area // w, w]
