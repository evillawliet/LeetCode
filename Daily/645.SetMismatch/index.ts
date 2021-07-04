/**
 * 645. Set Mismatch
 * You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

 * You are given an integer array nums representing the data status of this set after the error.

 * Find the number that occurs twice and the number that is missing and return them in the form of an array.
*/

function findErrorNums(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const res = [];
  for (let i = 0; i < len - 1; i++) {
    if ((nums[i] ^ nums[i + 1]) === 0) {
      res[0] = nums[i];
      nums.splice(i, 1);
      break;
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      res[1] = i + 1;
      break;
    }
  }

  return res;
}
