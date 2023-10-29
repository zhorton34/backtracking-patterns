# 3. Combinations

- **Notes**: Used for problems that involve generating all combinations of k elements from a given set. This pattern can also be adapted for problems that require generating combinations that meet a certain criteria.
- **Example LeetCode Problems**:
    - [Combinations](https://leetcode.com/problems/combinations/)
    - [Combination Sum](https://leetcode.com/problems/combination-sum/)
    - [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)

```js
function generateCombinations(n, k, start, combination, result) {
  if (combination.length === k) {
    result.push([...combination])
    return
  }
  for (let i = start; i <= n; i++) {
    combination.push(i)
    generateCombinations(n, k, i + 1, combination, result)
    combination.pop()
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    generateCombinations(n, k, 1, [], result) // Start value is changed to 1
    return result
};

```