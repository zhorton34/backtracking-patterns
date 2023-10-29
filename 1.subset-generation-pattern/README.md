# Backtracking: Subset Generation Pattern

- **Notes**: Useful for problems that involve generating all subsets, or powersets, from a given set. Also applicable for finding specific subsets, like those that sum to a certain target.
- **Example LeetCode Problems**:
    - [Subsets](https://leetcode.com/problems/subsets/)
    - [Subsets II](https://leetcode.com/problems/subsets-ii/)
    - [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

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