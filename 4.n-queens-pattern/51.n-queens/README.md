# [51. N-Queens](https://leetcode.com/problems/n-queens/)

The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return _all distinct solutions to the **n-queens puzzle**_. You may return the answer in **any order**.

Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space, respectively.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)

**Input:** n = 4
**Output:** \[\[".Q..","...Q","Q...","..Q."\],\["..Q.","Q...","...Q",".Q.."\]\]
**Explanation:** There exist two distinct solutions to the 4-queens puzzle as shown above

**Example 2:**

**Input:** n = 1
**Output:** \[\["Q"\]\]

**Constraints:**

- `1 <= n <= 9`

## Solution

```js
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
```