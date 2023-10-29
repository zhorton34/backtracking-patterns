/**
 * Time Complexity: O(N * 2^N)
 * Space Complexity: O(N * 2^N)
 * 
 * @param {*} candidates 
 * @param {*} target 
 * @param {*} start 
 * @param {*} combination 
 * @param {*} result 
 * @param {*} sum 
 * @returns 
 */
function generateCombinations(candidates, target, start, combination, result, sum) {
  if (sum === target) {
      result.push([...combination])
      return
  }

  for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] > target) continue
      combination.push(candidates[i])
      generateCombinations(candidates, target, i, combination, result, sum + candidates[i])
      combination.pop()
  }
}

function combinationSum(candidates, target) {
  const result = []
  generateCombinations(candidates, target, 0, [], result, 0)
  return result
}

Deno.test({
  name: "Backtracking: combination sum",
  fn() {
    const result = combinationSum([2,3,6,7], 7)
    const expected = [
      [2,2,3],
      [7],
    ]
    console.assert(result, expected)
  },
})