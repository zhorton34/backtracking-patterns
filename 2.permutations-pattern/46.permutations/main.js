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
  }

  for (let i = start; i < nums.length; i++) {
    [nums[start], nums[i]] = [nums[i], nums[start]];
    generatePermutations(nums, start + 1, result);
    [nums[start], nums[i]] = [nums[i], nums[start]];  // backtrack
  }

  return result;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    const result = []

    return generatePermutations(nums, 0, result)
};

Deno.test({
  name: "Backtracking: permutations",
  fn() {
    const result = permute([1, 2, 3])
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2],
    ]
    console.assert(result, expected)
  },
})