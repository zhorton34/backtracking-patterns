/**
 * Keys:
 * 1. Pass in sorted array of nums
 * 2. Skip duplicates by checking if i > start and nums[i] === nums[i - 1]
 * 
 * @param {*} nums 
 * @param {*} start 
 * @param {*} subset 
 * @param {*} result 
 */
function generateSubsets(nums, start, subset, result) {
  result.push([...subset])

  for (let i = start; i < nums.length; i++) {
    // skip duplicates
    if (i > start && nums[i] === nums[i - 1]) continue

    
    subset.push(nums[i])
    generateSubsets(nums, i + 1, subset, result)
    subset.pop()
  }
}

/**
 * Time Complexity: O(N * 2^N)
 * Space Complexity: O(N * 2^N)
 * @param {*} nums 
 * @returns 
 */
function subsetsWithDup(nums) {
  nums.sort((a, b) => a - b); // Sort the array to handle duplicates
  const result = [];
  generateSubsets(nums, 0, [], result);
  return result;
}

Deno.test({
  name: "Backtracking: generate subsets with duplicates",
  fn() {
    const result = subsetsWithDup([1, 2, 2]);
    const expected = [
      [],
      [1],
      [1, 2],
      [1, 2, 2],
      [2],
      [2, 2],
    ];
    console.assert(result, expected);
  },
})
