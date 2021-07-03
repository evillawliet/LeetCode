/**
 * 136. Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

 * You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

function singleNumber(nums: number[]): number {
  let singleOne = 0
  nums.forEach(num => {
    singleOne ^= num
  })
  return singleOne
}
