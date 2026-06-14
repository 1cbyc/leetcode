function tictactoe(moves: any): boolean | number | string | any {
  """
  :type moves: List[List[int]]
  :rtype: str
  """
  row, col = [[0]*3 for _ in Array.from({length: 2}, (_, i) => i)], [[0]*3 for _ in Array.from({length: 2}, (_, i) => i)]
  diag, anti_diag = [0]*2, [0]*2
  p = 0
  for (r, c in moves) {
      row[p][r] += 1
      col[p][c] += 1
      diag[p] += r == c
      anti_diag[p] += r+c == 2
      if (3 in (row[p][r], col[p][c], diag[p], anti_diag[p])) {
          return "AB"[p];
      p ^= 1
  return "Draw" if (moves).length == 9 else "Pending";
}

export { tictactoe };
