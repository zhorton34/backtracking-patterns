# [31. Next Permutation](https://leetcode.com/problems/next-permutation/)

A **permutation** of an array of integers is an arrangement of its members into a sequence or linear order.

- For example, for `arr = [1,2,3]`, the following are all the permutations of `arr`: `[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1]`.

The **next permutation** of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the **next permutation** of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

- For example, the next permutation of `arr = [1,2,3]` is `[1,3,2]`.
- Similarly, the next permutation of `arr = [2,3,1]` is `[3,1,2]`.
- While the next permutation of `arr = [3,2,1]` is `[1,2,3]` because `[3,2,1]` does not have a lexicographical larger rearrangement.

Given an array of integers `nums`, _find the next permutation of_ `nums`.

The replacement must be **[in place](http://en.wikipedia.org/wiki/In-place_algorithm)** and use only constant extra memory.

**Example 1:**

**Input:** nums = \[1,2,3\]
**Output:** \[1,3,2\]

**Example 2:**

**Input:** nums = \[3,2,1\]
**Output:** \[1,2,3\]

**Example 3:**

**Input:** nums = \[1,1,5\]
**Output:** \[1,5,1\]

**Constraints:**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

## Solution

```js
// !!Overkill on this one, don't neet to generate all permutations, just the next one!!

// function generatePermutations(nums, start = 0, result = []) {
//   if (start === nums.length - 1) {
//     result.push([...nums]);
//   }

//   for (let i = start; i < nums.length; i++) {
//     [nums[start], nums[i]] = [nums[i], nums[start]];
//     generatePermutations(nums, start + 1, result);
//     [nums[start], nums[i]] = [nums[i], nums[start]];  // backtrack
//   }

//   return result;
// }

function nextPermutation(nums) {
  let i = nums.length - 2;

  // Step 1: Find the first decreasing element
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // Step 2: Find the smallest number larger than nums[i] from its right side
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
  
    // Step 3: Swap the two numbers
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 4: Reverse the numbers after i
  let start = i + 1;
  let end = nums.length - 1;
  
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
  
  return nums;
}
```