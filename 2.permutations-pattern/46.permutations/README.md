# [46. Permutations](https://leetcode.com/problems/permutations/)

Given an array `nums` of distinct integers, return _all the possible permutations_. You can return the answer in **any order**.

**Example 1:**

**Input:** nums = \[1,2,3\]
**Output:** \[\[1,2,3\],\[1,3,2\],\[2,1,3\],\[2,3,1\],\[3,1,2\],\[3,2,1\]\]

**Example 2:**

**Input:** nums = \[0,1\]
**Output:** \[\[0,1\],\[1,0\]\]

**Example 3:**

**Input:** nums = \[1\]
**Output:** \[\[1\]\]

**Constraints:**

- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- All the integers of `nums` are **unique**.

### Solution

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
    result.push([...nums])
  }

  for (let i = start; i < nums.length; i++) {
    [nums[start], nums[i]] = [nums[i], nums[start]]
    generatePermutations(nums, start + 1, result)
    [nums[start], nums[i]] = [nums[i], nums[start]]  // backtrack
  }

  return result
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    const result = []

    return generatePermutations(nums, 0, result)
}
```

The provided JavaScript code generates all the permutations of an array `nums`. It uses backtracking to create each permutation and saves them in the `result` array. The code consists of two main functions: `generatePermutations` and `permute`.

### Functions:

1. **permute(nums)**: This function initializes the `result` array and calls the `generatePermutations` function to populate it.
    
2. **generatePermutations(nums, start, result)**: This function recursively generates the permutations.
    

### Time Complexity:

- **O(N \* N!)**: The function makes N! recursive calls, each of which takes O(N) time to generate a permutation. This leads to a time complexity of O(N \* N!).

### Space Complexity:

- **O(N \* N!)**: There are N! permutations, and each permutation contains N elements. The result array stores all these permutations, leading to a space complexity of O(N \* N!).

### How it works:

- The function `generatePermutations` swaps each element in the array with itself and every element that comes after it. After the swap, it makes a recursive call to `generatePermutations`, incrementing the `start` index. This is done to fix the first `start` elements and generate all possible arrangements for the remaining elements.
    
- The swap is reversed (backtrack) after coming back from the recursion to restore the original array. This backtracking is essential to explore all possible permutations.
    

### Example:

- For `nums = [1, 2, 3]`, it starts by swapping 1 with itself and with 2 and 3, and for each swap, it fixes the first element and recursively finds the permutations of the remaining elements.

The code is a classic example of using backtracking to solve a combinatorial problem. If you want to practice similar backtracking problems, you can try [LeetCode 46](https://leetcode.com/problems/permutations/) or [LeetCode 47](https://leetcode.com/problems/permutations-ii/), which are about generating unique permutations for a given set of numbers.