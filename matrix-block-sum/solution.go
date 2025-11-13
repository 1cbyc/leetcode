func matrixBlockSum(mat [][]int, k int) [][]int {
	if len(mat) == 0 || len(mat[0]) == 0 {
		return [][]int{}
	}

	rows := len(mat)
	cols := len(mat[0])

	prefix := make([][]int, rows+1)
	for r := range prefix {
		prefix[r] = make([]int, cols+1)
	}

	for r := 0; r < rows; r++ {
		rowSum := 0
		for c := 0; c < cols; c++ {
			rowSum += mat[r][c]
			prefix[r+1][c+1] = prefix[r][c+1] + rowSum
		}
	}

	out := make([][]int, rows)
	for r := 0; r < rows; r++ {
		out[r] = make([]int, cols)
		for c := 0; c < cols; c++ {
			r1 := max(0, r-k)
			c1 := max(0, c-k)
			r2 := min(rows-1, r+k)
			c2 := min(cols-1, c+k)

			out[r][c] = blockSum(prefix, r1, c1, r2, c2)
		}
	}

	return out
}

func blockSum(prefix [][]int, r1, c1, r2, c2 int) int {
	r1++
	c1++
	r2++
	c2++

	return prefix[r2][c2] - prefix[r1-1][c2] - prefix[r2][c1-1] + prefix[r1-1][c1-1]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

