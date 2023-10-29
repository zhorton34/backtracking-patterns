# [Permutations II](https://leetcode.com/problems/permutations-ii/)

Given a collection of numbers, `nums`, that might contain duplicates, return _all possible unique permutations **in any order**._

**Example 1:**

**Input:** nums = \[1,1,2\]
**Output:**
\[\[1,1,2\],
 \[1,2,1\],
 \[2,1,1\]\]

**Example 2:**

**Input:** nums = \[1,2,3\]
**Output:** \[\[1,2,3\],\[1,3,2\],\[2,1,3\],\[2,3,1\],\[3,1,2\],\[3,2,1\]\]

**Constraints:**

- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`

## Solution

## Solution

- Variation: Use a set auxillary data structure to track seen numbers

```js
/**
 * Time Complexity: O(N * N!)
 * Space Complexity: O(N * N!)
 * @param {*} nums 
 * @param {*} start 
 * @param {*} result 
 * @returns 
 */
function generatePermutations(nums, start = 0, result = []) {
  if (start === nums.length - 1) {
    result.push([...nums]);
    return result;
  }

  const seen = new Set(); // Keep track of seen numbers at this level

  for (let i = start; i < nums.length; i++) {
    if (seen.has(nums[i])) continue; // Skip duplicates
    seen.add(nums[i]);

    [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
    generatePermutations(nums, start + 1, result); // Recurse
    [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack
  }

  return result;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
    const result = []
    
    return generatePermutations(nums, 0, result)
};

```