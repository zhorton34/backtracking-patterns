# [39. Combination Sum](https://leetcode.com/problems/combination-sum/)

Given an array of **distinct** integers `candidates` and a target integer `target`, return _a list of all **unique combinations** of_ `candidates` _where the chosen numbers sum to_ `target`_._ You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the

frequency

of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

**Example 1:**

**Input:** candidates = \[2,3,6,7\], target = 7
**Output:** \[\[2,2,3\],\[7\]\]
**Explanation:**
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

**Example 2:**

**Input:** candidates = \[2,3,5\], target = 8
**Output:** \[\[2,2,2,2\],\[2,3,3\],\[3,5\]\]

**Example 3:**

**Input:** candidates = \[2\], target = 1
**Output:** \[\]

**Constraints:**

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- All elements of `candidates` are **distinct**.
- `1 <= target <= 40`

## Solution

You can solve this problem using a recursive backtracking approach, based on the combinations pattern. In this problem, you are allowed to use the same number multiple times, so you only move to the next candidate when it's not possible to reach the target with the current candidate.

Here is the JavaScript code to solve the problem:


```js
function generateCombinations(candidates, target, start, combination, result, sum) {
  if (sum === target) {
      result.push([...combination])
      return
  }

  for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] > target) continue
      combination.push(candidates[i])
      generateCombinations(candidates, target, i, combination, result, sum + candidates[i])
      combination.pop()
  }
}

function combinationSum(candidates, target) {
  const result = []
  generateCombinations(candidates, target, 0, [], result, 0)
  return result
}
```

The time complexity for this approach is hard to determine due to the recursive nature and varying input sizes, but it should be reasonably efficient as it only explores valid candidates and uses the result array to directly store valid combinations. The space complexity is O(n) where nnn is the size of the input array, due to the recursive stack and the result array.