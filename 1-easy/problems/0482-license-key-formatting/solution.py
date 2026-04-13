def licenseKeyFormatting(S, K):
    cleaned = S.replace('-', '').upper()

    if not cleaned:
        return ""

    result = []
    for i in range(len(cleaned) - 1, -1, -1):
        if len(result) > 0 and len(result) % (K + 1) == K:
            result.append('-')
        result.append(cleaned[i])

    return ''.join(reversed(result))
