/**
 * 930. Binary Subarrays With Sum
 * Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

 * A subarray is a contiguous part of the array.
*/
function numSubarraysWithSum(nums: number[], goal: number): number {
  let sum = 0
  let result = 0
  const count = new Map()
  for (let num of nums) {
    count.set(sum, (count.get(sum) || 0) + 1)
    sum += num
    result += count.get(sum - goal) || 0
  }
  return result
}
