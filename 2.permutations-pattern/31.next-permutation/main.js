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

  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  return generatePermutations(nums, i + 1);
}

Deno.test({
  name: "Backtracking: next permutation",
  fn() {
    const nums = [1, 2, 3];
    nextPermutation(nums);
    const expected = [
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2],
      [1, 2, 3],
    ];
    console.assert(nums, expected);
  },
})