# [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note:** The solution set must not contain duplicate combinations.

**Example 1:**

**Input:** candidates = \[10,1,2,7,6,1,5\], target = 8
**Output:** 
\[
\[1,1,6\],
\[1,2,5\],
\[1,7\],
\[2,6\]
\]

**Example 2:**

**Input:** candidates = \[2,5,2,1,2\], target = 5
**Output:** 
\[
\[1,2,2\],
\[5\]
\]

**Constraints:**

- `1 <= candidates.length <= 100`
- `1 <= candidates[i] <= 50`
- `1 <= target <= 30`

## Solution
- Variations
    - Skip duplicates
    - Skip the rest if sum becomes larger than target
    
```js
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


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b)

    const result = []
    generateCombinations(candidates, target, 0, [], result, 0)
    return result
};
```