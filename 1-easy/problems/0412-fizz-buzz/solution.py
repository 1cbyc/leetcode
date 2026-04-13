def fizzBuzz(n):
    """
    Return a list of fizz buzz results.

    Args:
        n: int - upper bound (inclusive)

    Returns:
        List[str] - fizz buzz result
    """
    result = []

    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))

    return result
