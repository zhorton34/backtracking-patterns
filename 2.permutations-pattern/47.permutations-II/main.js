/**
 * Time Complexity: O(N * N!)
 * Space Complexity:
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

Deno.test({
  name: "Backtracking: permutations with duplicates",
  fn() {
    const result = permuteUnique([1, 1, 2])
    const expected = [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ]
    console.assert(result, expected)
  },
})