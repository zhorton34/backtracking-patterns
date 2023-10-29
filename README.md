# Backtracking Patterns (JavaScript/Deno)
(See subfolders for individual solutions)


## 1. Subset Generation

```js
function generateSubsets(nums, start = 0, subset = [], result = []) {
  result.push([...subset]);

  for (let i = start; i < nums.length; i++) {
    subset.push(nums[i]);
    generateSubsets(nums, i + 1, subset, result);
    subset.pop();
  }

  return result;
}

```
- **Notes**: Useful for problems that involve generating all subsets, or powersets, from a given set. Also applicable for finding specific subsets, like those that sum to a certain target.
- **Example LeetCode Problems**:
    - [Subsets](https://leetcode.com/problems/subsets/)
    - [Subsets II](https://leetcode.com/problems/subsets-ii/)
    - [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

### 2\. Permutations

```js
function permute(nums, start = 0, result = []) {
  if (start === nums.length - 1) {
    result.push([...nums]);
  }

  for (let i = start; i < nums.length; i++) {
    [nums[start], nums[i]] = [nums[i], nums[start]];
    permute(nums, start + 1, result);
    [nums[start], nums[i]] = [nums[i], nums[start]];  // backtrack
  }

  return result;
}
```
- **Notes**: Used when you need to generate all possible orders or arrangements of a set of elements. It's often useful in problems that involve strings or arrays.
- **Example LeetCode Problems**:
    - [Permutations](https://leetcode.com/problems/permutations/)
    - [Permutations II](https://leetcode.com/problems/permutations-ii/)
    - [Next Permutation](https://leetcode.com/problems/next-permutation/)

### 3\. Combinations
```js
function combine(nums, k, start = 0, combination = [], result = []) {
  if (combination.length === k) {
    result.push([...combination]);
    return;
  }

  for (let i = start; i < nums.length; i++) {
    combination.push(nums[i]);
    combine(nums, k, i + 1, combination, result);
    combination.pop();
  }

  return result;
}
```
- **Notes**: Used for problems that involve generating all combinations of k elements from a given set. This pattern can also be adapted for problems that require generating combinations that meet a certain criteria.
- **Example LeetCode Problems**:
    - [Combinations](https://leetcode.com/problems/combinations/)
    - [Combination Sum](https://leetcode.com/problems/combination-sum/)
    - [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)

### 4\. N-Queens
```js
function solveNQueens(n) {
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const result = [];

  function isValid(row, col) {
    // Check same column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    // Check diagonals
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  }

  function backtrack(row = 0) {
    if (row === n) {
      result.push(board.map(r => r.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';  // backtrack
      }
    }
  }

  backtrack();
  return result;
}
```
- **Notes**: Although specifically for N-Queens, this pattern shows how to handle constraints. It can be generalized for other constraint-based problems like Sudoku.
- **Example LeetCode Problems**:
    - [N-Queens](https://leetcode.com/problems/n-queens/)
    - [N-Queens II](https://leetcode.com/problems/n-queens-ii/)
    - [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)