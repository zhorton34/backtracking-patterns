function isSafe(board, row, col) {
  for (let i = 0; i < row; i++) {
    if (
      board[i] === col ||
      Math.abs(board[i] - col) === Math.abs(i - row)
    ) {
      return false
    }
  }
  return true
}

function solveNQueensUtil(board, row, n, count) {
  if (row === n) {
    count[0]++
    return
  }

  for (let col = 0; col < n; col++) {
    if (isSafe(board, row, col)) {
      board[row] = col
      solveNQueensUtil(board, row + 1, n, count)
    }
  }
}

/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens (n) {
  const board = Array(n).fill(-1)
  let count = [0]
  solveNQueensUtil(board, 0, n, count)
  return count[0]
}

Deno.test({
  name: "Backtracking: n queens II",
  fn() {
    const result = totalNQueens(4)
    const expected = 2
    console.assert(result, expected)
  },
})
