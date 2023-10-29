# [216. Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)

Find all valid combinations of `k` numbers that sum up to `n` such that the following conditions are true:

- Only numbers `1` through `9` are used.
- Each number is used **at most once**.

Return _a list of all possible valid combinations_. The list must not contain the same combination twice, and the combinations may be returned in any order.

**Example 1:**

**Input:** k = 3, n = 7
**Output:** \[\[1,2,4\]\]
**Explanation:**
1 + 2 + 4 = 7
There are no other valid combinations.

**Example 2:**

**Input:** k = 3, n = 9
**Output:** \[\[1,2,6\],\[1,3,5\],\[2,3,4\]\]
**Explanation:**
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.

**Example 3:**

**Input:** k = 4, n = 1
**Output:** \[\]
**Explanation:** There are no valid combinations.
Using 4 different numbers in the range \[1,9\], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.

## Solution

You can solve this problem using the combinations pattern, employing backtracking. Given that you can use numbers from 1 to 9, and each number can be used at most once, you can start with 1 and try to find a combination of kkk numbers that sum up to nnn.

Here's the JavaScript code for the problem using a backtracking function modeled after the combinations template:

```js
function generateCombinations(k, n, start, combination, result, sum) {
  if (combination.length === k) {
    if (sum === n) {
      result.push([...combination])
    }
    return
  }

  for (let i = start; i <= 9; i++) {
    if (sum + i > n) break
    combination.push(i)
    generateCombinations(k, n, i + 1, combination, result, sum + i)
    combination.pop()
  }
}


function combinationSum3(k, n) {
  const result = []
  generateCombinations(k, n, 1, [], result, 0)
  return result
}
```
The time complexity is O(C(9,k))O(C(9, k))O(C(9,k)), which is the number of ways to pick kkk numbers out of 9. This is because we are basically generating all possible combinations of kkk numbers from the numbers 1 through 9 and checking if they sum to nnn. The space complexity is O(k)O(k)O(k) for the recursive call stack and the combination array.