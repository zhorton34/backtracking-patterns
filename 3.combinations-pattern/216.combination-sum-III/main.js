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

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
  const result = []
  generateCombinations(k, n, 1, [], result, 0)
  return result
}

Deno.test({
  name: "Backtracking: combination sum III",
  fn() {
    const result = combinationSum3(3, 7)
    const expected = [
      [1,2,4],
    ]
    console.assert(result, expected)
  },
})