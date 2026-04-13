def guessNumber(n):
    left, right = 1, n

    while left <= right:
        mid = (left + right) // 2
        result = guess(mid)

        if result == 0:
            return mid
        elif result == -1:
            right = mid - 1
        else:
            left = mid + 1
