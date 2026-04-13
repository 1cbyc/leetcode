def licenseKeyFormatting(S, K):
    """
    Format a license key with dashes.

    Args:
        S: str - license key string
        K: int - characters between dashes

    Returns:
        str - formatted license key
    """
    cleaned = S.replace('-', '').upper()

    if not cleaned:
        return ""

    result = []
    for i in range(len(cleaned) - 1, -1, -1):
        if len(result) > 0 and len(result) % (K + 1) == K:
            result.append('-')
        result.append(cleaned[i])

    return ''.join(reversed(result))
