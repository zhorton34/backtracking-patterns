
### 1\. Subset Generation:

Used for generating all subsets or combinations of an array.

javascriptCopy code

`function generateSubsets(nums, start, subset, result) {
  result.push([...subset]);
  for (let i = start; i < nums.length; i++) {
    subset.push(nums[i]);
    generateSubsets(nums, i + 1, subset, result);
    subset.pop();
  }
}` 

**When to use**: Problems like "Subsets", "Combinations"

🔗 LeetCode Example: [Subsets](https://leetcode.com/problems/subsets/)

### 2\. Permutation Generation:

Used for generating all permutations of an array.


```js
function generatePermutations(nums, permutation, result) {
  if (permutation.length === nums.length) {
    result.push([...permutation]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (permutation.includes(nums[i])) continue;
    permutation.push(nums[i]);
    generatePermutations(nums, permutation, result);
    permutation.pop();
  }
}
```

**When to use**: Problems like "Permutations", "Unique Permutations"

🔗 LeetCode Example: [Permutations](https://leetcode.com/problems/permutations/)

### 3\. Combination Sum:

Used for finding all combinations that sum to a specific target.


```js
function generateCombinations(candidates, target, start, combination, result, sum) {
  if (sum === target) {
    result.push([...combination]);
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    if (sum + candidates[i] > target) break;
    combination.push(candidates[i]);
    generateCombinations(candidates, target, i, combination, result, sum + candidates[i]);
    combination.pop();
  }
}
```

**When to use**: Problems like "Combination Sum", "Combination Sum II"

🔗 LeetCode Example: [Combination Sum](https://leetcode.com/problems/combination-sum/)

### 4\. Path Finding in a Grid:

Used for finding paths in a 2D grid, often used in maze problems.


```js
function findPath(grid, x, y, path, result) {
  if (isDestination(x, y, grid)) {
    result.push([...path]);
    return;
  }
  // Mark the cell as visited
  grid[x][y] = '#';
  
  // Explore the 4 directions
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for (const [dx, dy] of directions) {
    const newX = x + dx, newY = y + dy;
    if (isValid(newX, newY, grid)) {
      path.push([newX, newY]);
      findPath(grid, newX, newY, path, result);
      path.pop();
    }
  }
  
  // Unmark the cell
  grid[x][y] = '.';
}
```

**When to use**: Problems like "Rat in a Maze", "Word Search"

🔗 LeetCode Example: [Word Search](https://leetcode.com/problems/word-search/)

These are just templates and often need to be adapted based on the specifics of the problem you're solving. Nevertheless, these patterns can serve as a strong foundation for tackling a wide variety of backtracking problems.


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