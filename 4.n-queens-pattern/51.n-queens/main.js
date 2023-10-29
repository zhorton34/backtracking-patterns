function isSafe(board, row, col) {
  for (let i = 0; i < row; i++) {
    if (
      board[i] === col ||
      Math.abs(board[i] - col) === Math.abs(i - row)
    ) {
      return false
    }
  }
  return true;
}

function solveNQueensUtil(board, row, n, result) {
  if (row === n) {
    const solution = board.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))
    result.push(solution)
    return
  }

  for (let col = 0; col < n; col++) {
    if (isSafe(board, row, col)) {
      board[row] = col
      solveNQueensUtil(board, row + 1, n, result)
    }
  }
}

function solveNQueens(n) {
  const board = Array(n).fill(-1)
  const result = []
  solveNQueensUtil(board, 0, n, result)
  return result
}

Deno.test({
  name: "Backtracking: n queens",
  fn() {
    const result = solveNQueens(4)
    const expected = [
      [".Q..","...Q","Q...","..Q."],
      ["..Q.","Q...","...Q",".Q.."]
    ]
    console.assert(result, expected)
  },
})