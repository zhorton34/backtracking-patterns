/**
 * Time Complexity: O(N * 2^N)
 * Space Complexity: O(N * 2^N)
 * 
 * @param {*} nums 
 * @param {*} start 
 * @param {*} subset 
 * @param {*} result 
 * @returns 
 */
export function generateSubsets(nums, start = 0, subset = [], result = []) {
  result.push([...subset])

  for (let i = start; i < nums.length; i++) {
    subset.push(nums[i])
    generateSubsets(nums, i + 1, subset, result)
    subset.pop()
  }

  return result
}


Deno.test({
  name: "Backtracking: generate subsets",
  fn() {
    const result = generateSubsets([1, 2, 3])
    const expected = [
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ]
    console.assert(result, expected)
  },
})