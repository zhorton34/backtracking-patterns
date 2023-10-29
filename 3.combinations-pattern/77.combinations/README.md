# [77.Combinations](https://leetcode.com/problems/combinations/description/)

Given two integers `n` and `k`, return _all possible combinations of_ `k` _numbers chosen from the range_ `[1, n]`.

You may return the answer in **any order**.

**Example 1:**

**Input:** n = 4, k = 2
**Output:** \[\[1,2\],\[1,3\],\[1,4\],\[2,3\],\[2,4\],\[3,4\]\]
**Explanation:** There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., \[1,2\] and \[2,1\] are considered to be the same combination.

**Example 2:**

**Input:** n = 1, k = 1
**Output:** \[\[1\]\]
**Explanation:** There is 1 choose 1 = 1 total combination.

**Constraints:**

- `1 <= n <= 20`
- `1 <= k <= n`

## Solution

```js
function generateCombinations(n, k, start, combination, result) {
  if (combination.length === k) {
    result.push([...combination]);
    return;
  }
  for (let i = start; i <= n; i++) {
    combination.push(i);
    generateCombinations(n, k, i + 1, combination, result);
    combination.pop();
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    generateCombinations(n, k, 1, [], result);  // Start value is changed to 1
    return result;
};

```