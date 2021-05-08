/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
*/
let removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (nums[j] != nums[i]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j;
};
