# [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/)

The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return _the number of distinct solutions to the **n-queens puzzle**_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)

**Input:** n = 4
**Output:** 2
**Explanation:** There are two distinct solutions to the 4-queens puzzle as shown.

**Example 2:**

**Input:** n = 1
**Output:** 1

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
var totalNQueens = function(n) {
  const board = Array(n).fill(-1)
  let count = [0]
  solveNQueensUtil(board, 0, n, count)
  return count[0]
}
```