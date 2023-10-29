function generateCombinations(candidates, target, start, subset, result, sum) {
  // Base case: if the subset sum is equal to target, add it to result
  if (sum === target) {
    result.push([...subset]);
    return;
  }
  
  for (let i = start; i < candidates.length; i++) {
    // Skip duplicates
    if (i > start && candidates[i] === candidates[i - 1]) continue;
    
    // Pruning: skip the rest if sum becomes larger than target
    if (sum + candidates[i] > target) break;
    
    subset.push(candidates[i]);
    // Move to the next index as each number may be used only once
    generateCombinations(candidates, target, i + 1, subset, result, sum + candidates[i]);
    subset.pop();
  }
}


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b)

    const result = []
    generateCombinations(candidates, target, 0, [], result, 0)
    return result
};

Deno.test({
  name: "Backtracking: combination sum II",
  fn() {
    const result = combinationSum2([10,1,2,7,6,1,5], 8)
    const expected = [
      [1,1,6],
      [1,2,5],
      [1,7],
      [2,6],
    ]
    console.assert(result, expected)
  },
})