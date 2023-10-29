# Backtracking: Permutations Pattern

- **Notes**: Used when you need to generate all possible orders or arrangements of a set of elements. It's often useful in problems that involve strings or arrays.
- **Example LeetCode Problems**:
    - [Permutations](https://leetcode.com/problems/permutations/)
    - [Permutations II](https://leetcode.com/problems/permutations-ii/)
    - [Next Permutation](https://leetcode.com/problems/next-permutation/)

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
