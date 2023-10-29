function generateCombinations(n, k, start, combination, result) {
  if (combination.length === k) {
    result.push([...combination]);
    return;
  }
  for (let i = start; i <= n; i++) {
    combination.push(i);
    generateCombinations(n, k, i + 1, combination, result);
    combination.pop();
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    const result = [];
    generateCombinations(n, k, 1, [], result);  // Start value is changed to 1
    return result;
};

Deno.test({
  name: "Backtracking: combinations",
  fn() {
    const result = combine(4, 2)
    const expected = [
      [1,2],
      [1,3],
      [1,4],
      [2,3],
      [2,4],
      [3,4],
    ]
    console.assert(result, expected)
  },
})

