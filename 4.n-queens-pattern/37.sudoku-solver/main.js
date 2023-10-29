function solveSudoku(board) {
  return solve(board, 0, 0)
}

function solve(board, row, col) {
  if (row === 9) return true
  if (col === 9) return solve(board, row + 1, 0)
  
  if (board[row][col] !== '.') return solve(board, row, col + 1)
  
  for (let num = 1; num <= 9; num++) {
      if (isValid(board, row, col, num.toString())) {
          board[row][col] = num.toString()
          
          if (solve(board, row, col + 1)) return true
          
          board[row][col] = '.' // backtrack
      }
  }
  return false
}

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
      if (
          board[row][i] === num || 
          board[i][col] === num || 
          board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num
      ) {
          return false
      }
  }
  return true
}

Deno.test({
  name: "Backtracking: sudoku solver",
  fn() {
    const board = [
      ["5","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"],
    ]

    solveSudoku(board)
  },

})