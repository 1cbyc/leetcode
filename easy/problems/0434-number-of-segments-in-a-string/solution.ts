function countSegments(s: string): number {
    return s.split(/\s+/).filter(segment => segment.length > 0).length;
}
