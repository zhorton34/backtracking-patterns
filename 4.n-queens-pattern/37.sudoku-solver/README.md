# [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy **all of the following rules**:

1. Each of the digits `1-9` must occur exactly once in each row.
2. Each of the digits `1-9` must occur exactly once in each column.
3. Each of the digits `1-9` must occur exactly once in each of the 9 `3x3` sub-boxes of the grid.

The `'.'` character indicates empty cells.

**Example 1:**

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

**Input:** board = \[\["5","3",".",".","7",".",".",".","."\],\["6",".",".","1","9","5",".",".","."\],\[".","9","8",".",".",".",".","6","."\],\["8",".",".",".","6",".",".",".","3"\],\["4",".",".","8",".","3",".",".","1"\],\["7",".",".",".","2",".",".",".","6"\],\[".","6",".",".",".",".","2","8","."\],\[".",".",".","4","1","9",".",".","5"\],\[".",".",".",".","8",".",".","7","9"\]\]
**Output:** \[\["5","3","4","6","7","8","9","1","2"\],\["6","7","2","1","9","5","3","4","8"\],\["1","9","8","3","4","2","5","6","7"\],\["8","5","9","7","6","1","4","2","3"\],\["4","2","6","8","5","3","7","9","1"\],\["7","1","3","9","2","4","8","5","6"\],\["9","6","1","5","3","7","2","8","4"\],\["2","8","7","4","1","9","6","3","5"\],\["3","4","5","2","8","6","1","7","9"\]\]
**Explanation:** The input board is shown above and the only valid solution is shown below:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)

**Constraints:**

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit or `'.'`.
- It is **guaranteed** that the input board has only one solution.

## Solution

```js
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
```