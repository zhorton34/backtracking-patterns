export function generateSubsets(nums, start = 0, subset = [], result = []) {
  result.push([...subset])

  for (let i = start; i < nums.length; i++) {
    subset.push(nums[i])
    generateSubsets(nums, i + 1, subset, result)
    subset.pop()
  }

  return result
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
