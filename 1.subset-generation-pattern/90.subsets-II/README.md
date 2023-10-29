## [90. Subsets II](https://leetcode.com/problems/subsets-ii/)
Given an integer array `nums` that may contain duplicates, return _all possible_

_subsets_

_(the power set)_.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

**Example 1:**

**Input:** nums = \[1,2,2\]
**Output:** \[\[\],\[1\],\[1,2\],\[1,2,2\],\[2\],\[2,2\]\]

**Example 2:**

**Input:** nums = \[0\]
**Output:** \[\[\],\[0\]\]

**Constraints:**

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`


---

## Solution

Here's how you can solve it using a slightly modified version of the subset generation pattern. I'll include checks to ensure the sum of elements in the subset equals the target and to eliminate duplicate solutions.

```js
function combinationSum2(candidates, target) {
  // Sort the array to handle duplicates and for pruning
  candidates.sort((a, b) => a - b);
  
  const result = [];
  generateCombinations(candidates, target, 0, [], result, 0);
  
  return result;
}

function generateCombinations(candidates, target, start, subset, result, sum) {
  // Base case: if the subset sum is equal to target, add it to result
  if (sum === target) {
    result.push([...subset]);
    return;
  }
  
  for (let i = start; i < candidates.length; i++) {
    // Skip duplicates
    if (i > start && candidates[i] === candidates[i - 1]) continue;
    
    // Pruning: skip the rest if sum becomes larger than target
    if (sum + candidates[i] > target) break;
    
    subset.push(candidates[i]);
    // Move to the next index as each number may be used only once
    generateCombinations(candidates, target, i + 1, subset, result, sum + candidates[i]);
    subset.pop();
  }
}

// Test the function
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
```

### Notes:

- **Sort**: We sort the array first to easily skip over duplicates and to apply pruning (skipping the rest of the array when the sum goes beyond target).
    
- **Skip Duplicates**: `if (i > start && candidates[i] === candidates[i - 1]) continue;` ensures that we skip duplicate combinations.
    
- **Pruning**: We stop the loop if the current sum plus the current candidate number is greater than the target.
    
- **Index Update**: We start the next recursion from `i + 1` to ensure each number is used only once in the combination.
    

These patterns, especially the techniques for skipping duplicates and pruning, can be very useful in other similar backtracking problems.